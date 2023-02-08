import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

import { Radio } from '../../components/UI/Radio';
import { ContentDecoder } from '../../components/ContentDecoder';
import { GithubURL, WebsiteURL } from '../../components/WebsiteURL';
import { SearchBar } from '../../components/SearchBar';
import * as Menu from '../../components/UI/Menu';

import * as Layout from '../../components/Layout.styles';
import * as Styled from './index.styled';

import '../../shared/reset.css';
import '../../shared/font.css';

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
        <Layout.Container>
            <Layout.Header>
                <SearchBar onClick={handleClick} />
                <Menu.Menu>
                    <Menu.Title>
                        <div>Active Mode</div>
                        <Radio onChange={updateSettings} value={enableHooks || false} disabled={enableHooks === null} />
                    </Menu.Title>
                    <Menu.Body>
                        The Blockfence Extension will Automatically Pop-Up in Active Mode for Every Transaction
                    </Menu.Body>
                    <Menu.Separator />
                    <GithubURL />
                    <WebsiteURL />
                </Menu.Menu>
            </Layout.Header>

            <Layout.Body>
                {to === '' && (
                    <Styled.Help>Enter an address to find out more about a smart contract and how it works</Styled.Help>
                )}
                {to && <ContentDecoder chainId={chainId} to={to} />}
            </Layout.Body>
            {/* <Layout.Footer>
                <WebsiteURL />
                <GithubURL />
            </Layout.Footer> */}
        </Layout.Container>
    );
}

const container = window.document.querySelector('#app-container');
const root = createRoot(container as Element);
root.render(<Panel />);
