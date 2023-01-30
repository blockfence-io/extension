import axios, { AxiosError } from 'axios';
import React, { useState, useEffect } from 'react';

import { TxDescription, ErrorResponse } from '../types/api';

import { Header } from './Header';
import { Loader } from './UI/Loader';
import { Collapsable } from './UI/Collapsable';

import * as Styled from './ContentDecoder.styles';

const url = process.env.API_SERVER;

interface ContentDecoderProps {
    chainId?: string;
    to: string;
    showAccountAddress: boolean;
}

export function ContentDecoder({ chainId = '1', to, showAccountAddress }: ContentDecoderProps) {
    const [result, setResult] = useState<TxDescription | null>(null);
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
                url,
                data: {
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

            {result && <Header to={to} network='Ethereum Mainnet' />}

            {/* {false && result && showAccountAddress && (
                <>
                    <Styled.Subtitle>Contract Address</Styled.Subtitle>
                    <Styled.Reponse>{to}</Styled.Reponse>
                </>
            )} */}

            {result && (
                <Styled.Results>
                    <Collapsable title='Spotlight'>
                        <Styled.ContractName>{result.name}</Styled.ContractName>
                        {result.description}
                    </Collapsable>
                </Styled.Results>
            )}
        </>
    );
}
