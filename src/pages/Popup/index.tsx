import axios from 'axios';
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import '../../shared/reset.css';
import * as Styled from './index.styled';
import { TxDescription } from './types';

const url = 'https://jsonplaceholder.typicode.com/todos';

function Panel() {
    const [to, setTo] = useState('');
    const [result, setResult] = useState<TxDescription | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true);
        setError(null);
        setResult(null);
        try {
            const response = await axios({
                method: 'post',
                url,
                data: {
                    to,
                },
            });
            setIsLoading(false);
            setResult(response.data);
        } catch (err) {
            setError('Could not retrieve data from server');
        }
    }

    return (
        <Styled.Container>
            <h1>blockfence</h1>
            <form onSubmit={handleSubmit}>
                <Input type='text' value={to} onChange={(e) => setTo(e.target.value)} />
                <Button type='submit' disabled={to === ''}>
                    Send
                </Button>
            </form>
            {error && <div>AA{error}</div>}
            {isLoading && <div>Loading...</div>}
            {result && <div>{result.result}</div>}
        </Styled.Container>
    );
}

const container = window.document.querySelector('#app-container');
const root = createRoot(container as Element);
root.render(<Panel />);
