import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { useAsyncCallback } from 'react-async-hook';

import * as Layout from '../../components/Layout.styles';
import { SearchBar } from '../../components/SearchBar';
import { SettingsMenu } from '../../components/SettingsMenu';
import { ErrorMessage, LoadingMessage } from '../../components/PageMessages';
import { ContentDecoder } from '../../components/ContentDecoder';

import { fetchResult } from '../../shared/api';
import * as Styled from './index.styled';

import '../../shared/reset.css';
import '../../shared/font.css';

function Panel() {
    const [to, setTo] = useState('');
    const [chainId, setChainId] = useState('0x1');
    const asyncResults = useAsyncCallback(async (chainId, to) => fetchResult(chainId, to));

    async function handleClick(chainId: string, to: string) {
        setChainId(chainId);
        setTo(to);
        await asyncResults.execute(chainId, to);
    }

    return (
        <Layout.Container>
            <Layout.Header severity={asyncResults.result?.severity}>
                <SearchBar onClick={handleClick} disabled={asyncResults.loading} />
                <SettingsMenu />
            </Layout.Header>

            <Layout.Body>
                {to === '' && (
                    <Styled.Help>Enter an address to find out more about a smart contract and how it works</Styled.Help>
                )}

                {asyncResults.loading && <LoadingMessage />}
                {asyncResults.error && <ErrorMessage>A{asyncResults.error.message}</ErrorMessage>}
                {asyncResults.result && <ContentDecoder chainId={chainId} to={to} result={asyncResults.result} />}
            </Layout.Body>
        </Layout.Container>
    );
}

const container = window.document.querySelector('#app-container');
const root = createRoot(container as Element);
root.render(<Panel />);
