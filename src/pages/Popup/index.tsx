import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

import * as Styled from './index.styled';
import { Button } from '../../components/UI/Button';
import { Input } from '../../components/UI/Input';
import { ContentDecoder } from '../../components/ContentDecoder';
import '../../shared/reset.css';
import '../../shared/font.css';

function Panel() {
    const [input, setInput] = useState('');
    const [to, setTo] = useState('');

    async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        setTo(input);
    }

    return (
        <Styled.Container>
            <Styled.Title>
                blockfence | <Styled.Description>contract decoder</Styled.Description>
            </Styled.Title>

            <Styled.Label>Smart Contract Address</Styled.Label>
            <Styled.Form onSubmit={handleSubmit}>
                <Input type='text' value={input} onChange={(e) => setInput(e.target.value)} style={{ flex: 1 }} />
                <Button type='submit' disabled={input === '' || input === to}>
                    Send
                </Button>
            </Styled.Form>

            {to && <ContentDecoder to={to} showAccountAddress={false} />}
        </Styled.Container>
    );
}

const container = window.document.querySelector('#app-container');
const root = createRoot(container as Element);
root.render(<Panel />);
