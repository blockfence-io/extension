import axios, { AxiosError } from 'axios';
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

import { Button } from '../../components/UI/Button';
import Loader from '../../components/UI/Loader';
import '../../shared/reset.css';
import '../../shared/font.css';
import { ErrorResponse, TxDescription } from '../Popup/types';
import * as Styled from './index.styled';

const url = 'https://9q30xzk2r0.execute-api.us-east-1.amazonaws.com/staging/chat';

function Panel() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const to = urlSearchParams.get('to');

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
    }, [to]);

    return (
        <Styled.Container>
            <Styled.Title>
                blockfence | <span style={{ fontWeight: 300 }}>contract decoder</span>
            </Styled.Title>

            {error && (
                <Styled.Error>
                    <div>{error}</div>
                </Styled.Error>
            )}
            {fatalError && (
                <Styled.Error>
                    <Styled.SadFace>:(</Styled.SadFace>
                    <div>Whoops! It looks like we have encountered an unexpected error</div>
                </Styled.Error>
            )}
            {isLoading && <Loader />}
            {result && (
                <>
                    <Styled.Subtitle>Contract Address</Styled.Subtitle>
                    <Styled.Reponse>{to}</Styled.Reponse>
                    <Styled.Subtitle>Contract Name</Styled.Subtitle>
                    <Styled.Reponse>{result.name}</Styled.Reponse>
                    <Styled.Subtitle>Contract Description</Styled.Subtitle>
                    <Styled.Reponse>{result.description}</Styled.Reponse>
                </>
            )}
        </Styled.Container>
    );
}

const container = window.document.querySelector('#app-container');
const root = createRoot(container as Element);
root.render(<Panel />);
