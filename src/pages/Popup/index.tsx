import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

import * as Styled from './index.styled';
import { Radio } from '../../components/UI/Radio';
import { ContentDecoder } from '../../components/ContentDecoder';
import { GithubURL, WebsiteURL } from '../../components/WebsiteURL';

import '../../shared/reset.css';
import '../../shared/font.css';
import { SearchBar } from '../../components/SearchBar';

function Panel() {
    const [to, setTo] = useState('');
    const [chainId, setChainId] = useState('0x1');
    const [enableHooks, setEnableHooks] = useState<boolean | null>(null);

    async function handleClick(chainId: string, to: string) {
        setChainId(chainId);
        setTo(to);
    }

    async function updateSettings(enableHooks: boolean) {
        setEnableHooks(enableHooks);
        await chrome.storage.local.set({ enableHooks: enableHooks });
    }

    async function getEnableHooksStatus() {
        const storage = await chrome.storage.local.get('enableHooks');
        setEnableHooks(storage.enableHooks);
    }

    useEffect(() => {
        getEnableHooksStatus();
    }, []);

    return (
        <Styled.Container>
            <SearchBar onClick={handleClick} />

            {to === '' && (
                <Styled.Help>Enter an address to find out more about a smart contract and how it works</Styled.Help>
            )}
            {to && <ContentDecoder chainId={chainId} to={to} showAccountAddress={false} />}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1rem' }}>
                <Radio
                    onChange={updateSettings}
                    value={enableHooks || false}
                    disabled={enableHooks === null}
                    label='Notify on every transaction'
                />
            </div>
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
