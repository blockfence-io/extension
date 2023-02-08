import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';

import { EngineResponse, ErrorResponse } from '../types/api';

import { Header } from './Header';
import { Loader } from './UI/Loader';
import { Collapsable } from './UI/Collapsable';
import { Risk } from './Risk';

import SpotlightIcon from '../assets/icons/spotlight.svg';
import RadarIcon from '../assets/icons/radar-icon.svg';
import ChatGPTIcon from '../assets/icons/chatgpt.svg';

import * as Styled from './ContentDecoder.styles';

const BASE_URL = process.env.API_SERVER;

interface ContentDecoderProps {
    chainId?: string;
    to: string;
}

export function ContentDecoder({ chainId = '1', to }: ContentDecoderProps) {
    const [result, setResult] = useState<EngineResponse | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [fatalError, setFatalError] = useState<boolean>(false);

    async function fetchData() {
        setIsLoading(true);
        setError(null);
        setFatalError(false);
        setResult(null);
        try {
            const response = await axios({
                method: 'post',
                url: BASE_URL,
                data: {
                    plugin: 'BROWSER',
                    chain_id: chainId,
                    transaction: {
                        to,
                    },
                },
            });
            setResult(response.data);
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                const axiosError = error as AxiosError<ErrorResponse>;
                if (axiosError.response?.data.error) {
                    setError(axiosError.response.data.error);
                } else {
                    setFatalError(true);
                }
            } else {
                setFatalError(true);
            }
        }
        setIsLoading(false);
    }

    useEffect(() => {
        if (to) {
            fetchData();
        }
    }, [to, chainId]);

    return (
        <>
            {isLoading && (
                <Styled.LoadingContainer>
                    <Loader />
                </Styled.LoadingContainer>
            )}

            {error && <Styled.Error>{error}</Styled.Error>}

            {fatalError && (
                <Styled.Error>
                    <Styled.SadFace>:(</Styled.SadFace>
                    <div>Whoops! It looks like we have encountered an unexpected error</div>
                </Styled.Error>
            )}

            {result && <Header to={to} network='Ethereum Mainnet' severity={result ? result.severity : 'NONE'} />}

            {result && (
                <Styled.Results>
                    <Collapsable title='Spotlight' icon={<SpotlightIcon />} defaultState={true}>
                        <Styled.ContractName>{result.name}</Styled.ContractName>
                        {result.description}
                        <Styled.Copyrights>
                            <ChatGPTIcon />
                            powered by ChatGPT
                        </Styled.Copyrights>
                    </Collapsable>

                    <Collapsable title='Fraud Analysis' icon={<RadarIcon />}>
                        {result.risks.map((risk, id) => (
                            <Risk key={id} risk={risk} />
                        ))}
                    </Collapsable>
                </Styled.Results>
            )}
        </>
    );
}
