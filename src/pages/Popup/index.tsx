import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

import * as Layout from '../../components/Layout.styles';
import { SearchBar } from '../../components/SearchBar';
import { SettingsMenu } from '../../components/SettingsMenu';
import { ErrorMessage, LoadingMessage } from '../../components/PageMessages';
import { ContentDecoder } from '../../components/ContentDecoder';

import { useGetResults } from '../../shared/api';
import * as Styled from './index.styled';

import '../../shared/reset.css';
import '../../shared/font.css';

function Panel() {
    const [to, setTo] = useState('');
    const [chainId, setChainId] = useState('0x1');
    const { result, isLoading, error, fatalError, getData } = useGetResults();

    async function handleClick(chainId: string, to: string) {
        setChainId(chainId);
        setTo(to);
        getData(to, chainId);
    }

    return (
        <Layout.Container>
            <Layout.Header severity={result ? result.severity : undefined}>
                <SearchBar onClick={handleClick} />
                <SettingsMenu />
            </Layout.Header>

            <Layout.Body>
                {to === '' && (
                    <Styled.Help>Enter an address to find out more about a smart contract and how it works</Styled.Help>
                )}

                {isLoading && <LoadingMessage />}
                {error && <ErrorMessage>{error}</ErrorMessage>}
                {fatalError && (
                    <ErrorMessage withIcon>Whoops! It looks like we have encountered an unexpected error</ErrorMessage>
                )}

                {result && <ContentDecoder chainId={chainId} to={to} result={result} />}
            </Layout.Body>
        </Layout.Container>
    );
}

const container = window.document.querySelector('#app-container');
const root = createRoot(container as Element);
root.render(<Panel />);
