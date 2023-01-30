import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

import * as Styled from './index.styled';
import { Button } from '../../components/UI/Button';
import { Input } from '../../components/UI/Input';
import { ContentDecoder } from '../../components/ContentDecoder';
import { GithubURL, WebsiteURL } from '../../components/WebsiteURL';
import { NetworkSelector } from '../../components/NetworkSelector';
import '../../shared/reset.css';
import '../../shared/font.css';

function Panel() {
    const [input, setInput] = useState('');
    const [to, setTo] = useState('');
    const [chainId, setChainId] = useState('0x1');

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
                <NetworkSelector onChange={setChainId} />

                <Input type='text' value={input} onChange={(e) => setInput(e.target.value)} style={{ flex: 1 }} />
                <Button type='submit' disabled={input === '' || input === to}>
                    Send
                </Button>
            </Styled.Form>

            {to === '' && (
                <Styled.Help>Enter an address to find out more about a smart contract and how it works</Styled.Help>
            )}
            {to && <ContentDecoder chainId={chainId} to={to} showAccountAddress={false} />}
            {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Radio onChange={(e) => {}} label='Automatically track transactions' />
            </div> */}
            <Styled.Footer>
                <WebsiteURL />
                <GithubURL />
            </Styled.Footer>
        </Styled.Container>
    );
}

const container = window.document.querySelector('#app-container');
const root = createRoot(container as Element);
root.render(<Panel />);
