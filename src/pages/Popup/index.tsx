import axios from 'axios';
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import '../../shared/reset.css';
import * as Styled from './index.styled';
import { TxDescription } from './types';
import { QueryError } from './types';

const url = 'https://9q30xzk2r0.execute-api.us-east-1.amazonaws.com/staging/chat';

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
                    transaction: {
                        to,
                    }
                },
            });
            setIsLoading(false);
            setResult(response.data);
        } catch (err) {
            setIsLoading(false);
            // TODO: Print error message from server (use the QueryError type)
            setError("Error: ");
        }
    }

    return (
        <Styled.Container>
            <h1>Blockfence</h1>
            <h2>Smart Contract Address:</h2>
            <form onSubmit={handleSubmit}>
                <Input type='text' value={to} onChange={(e) => setTo(e.target.value)} />
                <Button type='submit' disabled={to === ''}>
                    Send
                </Button>
            </form>
            {error && <div className="error">{error} TEXT OF ERROR</div>}
            {isLoading && <div className="loading"><div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>}
            {result && <div className="response"><h3>Contract Name:</h3>{result.name}<br/><h3>Contract Description:</h3>{result.description}</div>}
        </Styled.Container>
    );
}

const container = window.document.querySelector('#app-container');
const root = createRoot(container as Element);
root.render(<Panel />);
