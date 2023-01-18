import axios, { AxiosError } from 'axios';
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

import { Button } from '../../components/UI/Button';
import { Input } from '../../components/UI/Input';
import '../../shared/reset.css';
import * as Styled from './index.styled';
import { TxDescription } from './types';
import { ErrorResponse } from './types';
import Loader from '../../components/UI/Loader';
import './font.css';

const url = 'https://9q30xzk2r0.execute-api.us-east-1.amazonaws.com/staging/chat';

function Panel() {
    const [to, setTo] = useState('');
    const [result, setResult] = useState<TxDescription | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [fatalError, setFatalError] = useState<boolean>(false);

    async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
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
                }
            } else {
                setFatalError(true);
            }
        }
        setIsLoading(false);
    }

    return (
        <Styled.Container>
            <Styled.Title>blockfence</Styled.Title>
            <Styled.Description>Get an easy to read smart-contract description</Styled.Description>

            <Styled.Label>Smart Contract Address</Styled.Label>
            <Styled.Form onSubmit={handleSubmit}>
                <Input type='text' value={to} onChange={(e) => setTo(e.target.value)} style={{ flex: 1 }} />
                <Button type='submit' disabled={to === '' || isLoading}>
                    Send
                </Button>
            </Styled.Form>
            <Styled.InputError>{error}</Styled.InputError>

            {fatalError && (
                <Styled.Error>
                    <Styled.SadFace>:(</Styled.SadFace>
                    <div>Whoops! It looks like we have encountered an unexpected error</div>
                </Styled.Error>
            )}
            {isLoading && <Loader />}
            {result && (
                <>
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
