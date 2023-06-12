import React, { useState } from 'react';
import { useAsyncCallback } from 'react-async-hook';

import { Results } from '../../components/Results';
import { NavigationBar } from '../../components/NavigationBar';
import { SearchBar, SearchMode, SearchState } from '../../components/SearchBar';
import { ErrorBoundary } from '../../components/CriticalError';
import { Layout, Banner } from '../../components/New/Layout';
import { Button } from '../../components/UI/Button';

import { fetchAnalyze, fetchDescription } from '../../shared/api';
import { SupportedNetworks } from '../../types/networks';

import '../../shared/reset.css';
import '../../shared/font.css';

import { logAddressSearchClick, logUrlSearchClick } from '../../shared/logs';

interface PopupPanelProps {
    hideAlpha?: boolean;
    hideSettings?: boolean;
    standalone?: boolean;
}

const emptyState = {
    mode: SearchMode.Address,
    chainId: '0x1',
    url: '',
    address: '',
};

export function PopupPanel({ hideAlpha = false, hideSettings = false, standalone = false }: PopupPanelProps) {
    const [searchInput, setSearchInput] = useState<SearchState>(emptyState);

    const [to, setTo] = useState('');
    const [chainId, setChainId] = useState<keyof typeof SupportedNetworks>('0x1');
    const [url, setURL] = useState('');

    const descriptionResult = useAsyncCallback(async (chainId, to) => fetchDescription(chainId, to));
    const analyzeResult = useAsyncCallback(async (chainId, to, url) => fetchAnalyze(chainId, to, url));

    async function submitUrl(url: string) {
        setURL(url);
        analyzeResult.execute(undefined, undefined, url);
        logUrlSearchClick(url);
    }

    async function submitAddress(chainId: string, to: string) {
        setChainId((chainId as keyof typeof SupportedNetworks) || '0x1');
        setTo(to || '');
        descriptionResult.execute(chainId, to);
        analyzeResult.execute(chainId, to, undefined);
        logAddressSearchClick(to, chainId);
    }

    async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        if (searchInput.mode === SearchMode.Address) {
            await submitAddress(searchInput.chainId, searchInput.address);
        } else {
            await submitUrl(searchInput.url);
        }
    }

    function reset() {
        setTo('');
        setURL('');
        setSearchInput(emptyState);
        analyzeResult.reset();
        descriptionResult.reset();
    }

    const compact = to !== '' || url !== '';
    const isLoading = analyzeResult.loading || descriptionResult.loading;

    return (
        <ErrorBoundary>
            <form onSubmit={handleSubmit}>
                <Layout
                    showSettings={!hideSettings}
                    fullpageMode={compact}
                    severity={analyzeResult.result?.severity}
                    panel={
                        compact ? (
                            <NavigationBar
                                onBack={reset}
                                url={url}
                                network={chainId}
                                address={to}
                                disabled={isLoading}
                            />
                        ) : (
                            <SearchBar onChange={setSearchInput} state={searchInput} />
                        )
                    }
                    body={
                        analyzeResult ? (
                            <Results
                                chainId={chainId}
                                to={to}
                                analyzeResult={analyzeResult}
                                descriptionResult={descriptionResult}
                            />
                        ) : undefined
                    }
                    footer={!compact ? <Button type='submit'>Scan</Button> : undefined}
                />
            </form>
            {!hideAlpha && <Banner>BETA</Banner>}
        </ErrorBoundary>
    );
}
