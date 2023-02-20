import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { useAsyncCallback, AsyncState } from 'react-async-hook';

import * as Layout from '../../components/Layout.styles';
import { SearchBar } from '../../components/SearchBar';
import { SettingsMenu } from '../../components/SettingsMenu';
import { ErrorMessage, LoadingMessage } from '../../components/PageMessages';
import { ContentDecoder } from '../../components/ContentDecoder';

import { fetchAnalyze, fetchDescription } from '../../shared/api';
import { logPageView, logSearchClick } from '../../shared/logs';
import * as Styled from './index.styled';

import '../../shared/reset.css';
import '../../shared/font.css';

function Panel() {
    const [to, setTo] = useState('');
    const [chainId, setChainId] = useState('0x1');
    const descriptionResult = useAsyncCallback(async (chainId, to) => fetchDescription(chainId, to));
    const analyzeResult = useAsyncCallback(async (chainId, to) => fetchAnalyze(chainId, to));

    function saveSessionState() {
        chrome.storage.local.set({
            latestState: {
                to,
                chainId,
                descriptionResult: descriptionResult.result,
                analyzeResult: analyzeResult.result,
            },
        });
    }

    async function restoreSessionState() {
        const storage = await chrome.storage.local.get('latestState');
        const state = storage.latestState;
        if (state) {
            setTo(state.to);
            setChainId(state.chainId);
            console.log('Resotre: ', state.analyzeResult);
            descriptionResult.set({
                result: state.descriptionResult,
                status: 'not-requested',
                loading: false,
                error: undefined,
            });
            analyzeResult.set({
                result: state.analyzeResult,
                status: 'not-requested',
                loading: false,
                error: undefined,
            });
        }
    }

    useEffect(() => {
        logPageView('Popup');
        restoreSessionState();
    }, []);

    useEffect(() => {
        saveSessionState();
    }, [descriptionResult, analyzeResult]);

    async function handleClick(chainId: string, to: string) {
        setChainId(chainId);
        setTo(to);
        descriptionResult.execute(chainId, to);
        analyzeResult.execute(chainId, to);
        logSearchClick(to, chainId);
    }
    const chatError =
        "GPT-3's experiencing some technical difficulties, but don't worry, our team's on it. In the meantime, give it another try or holla at us if you need a hand.";

    console.log('## Res: ', analyzeResult.result);

    return (
        <Layout.Container>
            <Layout.Banner>ALPHA</Layout.Banner>
            <Layout.Header severity={analyzeResult.result?.severity}>
                <SearchBar onClick={handleClick} disabled={analyzeResult.loading || descriptionResult.loading} />
                <SettingsMenu />
            </Layout.Header>

            <Layout.Body>
                {to === '' && (
                    <Styled.Help>Enter an address to find out more about a smart contract and how it works</Styled.Help>
                )}

                {analyzeResult.loading && <LoadingMessage />}
                {analyzeResult.error && <ErrorMessage>{analyzeResult.error.message}</ErrorMessage>}
                {analyzeResult.result && (
                    <ContentDecoder
                        chainId={chainId}
                        to={to}
                        analyzeResult={analyzeResult.result}
                        descriptionResult={descriptionResult.error ? chatError : descriptionResult.result?.description}
                    />
                )}
            </Layout.Body>
        </Layout.Container>
    );
}

const container = window.document.querySelector('#app-container');
const root = createRoot(container as Element);
root.render(<Panel />);
