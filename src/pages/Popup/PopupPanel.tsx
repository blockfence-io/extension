import React, { useState } from 'react';
import { useAsyncCallback } from 'react-async-hook';

import * as Layout from '../../components/Layout.styles';
import { Results } from '../../components/Results';
import { SearchBar } from '../../components/SearchBar';
import { SettingsMenu } from '../../components/SettingsMenu';
import { ErrorBoundary } from '../../components/CriticalError';

import { fetchAnalyze, fetchDescription } from '../../shared/api';
import { getActiveTabUrl } from '../../helpers/getActiveTab';
import * as Styled from './index.styled';

import Logo from '../../assets/logo-white.svg';

import '../../shared/reset.css';
import '../../shared/font.css';

import { logSearchClick } from '../../shared/logs';

interface PopupPanelProps {
    hideAlpha?: boolean;
    hideSettings?: boolean;
    standalone?: boolean;
}

export function PopupPanel({ hideAlpha = false, hideSettings = false, standalone = false }: PopupPanelProps) {
    const [to, setTo] = useState('');
    const [chainId, setChainId] = useState('0x1');
    const descriptionResult = useAsyncCallback(async (chainId, to) => fetchDescription(chainId, to));
    const analyzeResult = useAsyncCallback(async (chainId, to, url) => fetchAnalyze(chainId, to, url));

    async function handleClick(chainId: string, to: string) {
        setChainId(chainId);
        setTo(to);
        const url = standalone ? undefined : await getActiveTabUrl();
        descriptionResult.execute(chainId, to);
        analyzeResult.execute(chainId, to, url);
        logSearchClick(to, chainId);
    }

    const compact = to !== '';

    return (
        <ErrorBoundary>
            {!hideAlpha && <Layout.Banner>BETA</Layout.Banner>}

            <Layout.Logo hidden={compact}>
                <Logo />
                <div>Blockfence</div>
            </Layout.Logo>

            <Layout.FloatingSettings>{!hideSettings && !compact && <SettingsMenu />}</Layout.FloatingSettings>

            <Layout.Header severity={analyzeResult.result?.severity}>
                <SearchBar
                    onClick={handleClick}
                    disabled={analyzeResult.loading || descriptionResult.loading}
                    severity={analyzeResult.result?.severity}
                    compact={compact}
                    persistent={!standalone}
                />
                {!hideSettings && compact && <SettingsMenu />}
            </Layout.Header>

            <Layout.Body>
                {to === '' && <Styled.Help>Enter a blockchain address to analyze it</Styled.Help>}

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
