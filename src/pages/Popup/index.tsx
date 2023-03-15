import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { useAsyncCallback } from 'react-async-hook';

import * as Layout from '../../components/Layout.styles';
import { Results } from '../../components/Results';
import { SearchBar } from '../../components/SearchBar';
import { SettingsMenu } from '../../components/SettingsMenu';
import { ErrorBoundary } from '../../components/CriticalError';

import { fetchAnalyze, fetchDescription } from '../../shared/api';
import { getActiveTabUrl } from '../../helpers/getActiveTab';
import * as Styled from './index.styled';

import '../../shared/reset.css';
import '../../shared/font.css';

import { logPageView, logSearchClick } from '../../shared/logs';

interface PopupPanelProps {
    hideAlpha?: boolean;
    hideSettings?: boolean;
}

export function PopupPanel({ hideAlpha = false, hideSettings = false }: PopupPanelProps) {
    const [to, setTo] = useState('');
    const [chainId, setChainId] = useState('0x1');
    const descriptionResult = useAsyncCallback(async (chainId, to) => fetchDescription(chainId, to));
    const analyzeResult = useAsyncCallback(async (chainId, to, url) => fetchAnalyze(chainId, to, url));

    useEffect(() => {
        logPageView('Popup');
    }, []);

    async function handleClick(chainId: string, to: string) {
        setChainId(chainId);
        setTo(to);
        const url = await getActiveTabUrl();
        descriptionResult.execute(chainId, to);
        analyzeResult.execute(chainId, to, url);
        logSearchClick(to, chainId);
    }
    return (
        <ErrorBoundary>
            {!hideAlpha && <Layout.Banner>ALPHA</Layout.Banner>}
            <Layout.Header severity={analyzeResult.result?.severity}>
                <SearchBar onClick={handleClick} disabled={analyzeResult.loading || descriptionResult.loading} />
                {!hideSettings && <SettingsMenu />}
            </Layout.Header>

            <Layout.Body>
                {to === '' && (
                    <Styled.Help>Enter an address to find out more about a smart contract and how it works</Styled.Help>
                )}

                <Results
                    chainId={chainId}
                    to={to}
                    analyzeResult={analyzeResult}
                    descriptionResult={descriptionResult}
                />
            </Layout.Body>
        </ErrorBoundary>
    );
}

function Popup() {
    return (
        <Layout.Container>
            <PopupPanel />
        </Layout.Container>
    );
}

const container = window.document.querySelector('#app-container');
const root = createRoot(container as Element);
root.render(<Popup />);
