import React, { useState } from 'react';
import { useAsyncCallback } from 'react-async-hook';

import { Results } from '../../components/Results';
import { NavigationBar } from '../../components/NavigationBar';
import { SearchBar, SearchMode, SearchState } from '../../components/SearchBar';
import { ErrorBoundary } from '../../components/CriticalError';
import { Layout, Banner } from '../../components/Layout';
import { Button } from '../../components/UI/Button';

import { fetchAnalyze, fetchDescription } from '../../shared/api';

import '../../shared/reset.css';
import '../../shared/font.css';

import { logAddressSearchClick, logUrlSearchClick } from '../../shared/logs';

interface PopupPanelProps {
    hideAlpha?: boolean;
    hideSettings?: boolean;
}

const emptyState = {
    mode: SearchMode.Address,
    chainId: '0x1',
    url: '',
    address: '',
};

export function PopupPanel({ hideAlpha = false, hideSettings = false }: PopupPanelProps) {
    const [compactMode, setCompactMode] = useState(false);
    const [searchInput, setSearchInput] = useState<SearchState>(emptyState);

    const descriptionResult = useAsyncCallback(async (chainId, to) => fetchDescription(chainId, to));
    const analyzeResult = useAsyncCallback(async (chainId, to, url) => fetchAnalyze(chainId, to, url));

    async function submitUrl(url: string) {
        setCompactMode(true);
        analyzeResult.execute(undefined, undefined, url);
        logUrlSearchClick(url);
    }

    async function submitAddress(chainId: string, to: string) {
        setCompactMode(true);
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
        setSearchInput(emptyState);
        setCompactMode(false);
        analyzeResult.reset();
        descriptionResult.reset();
    }

    const isLoading = analyzeResult.loading || descriptionResult.loading;

    return (
        <ErrorBoundary>
            <form onSubmit={handleSubmit}>
                <Layout
                    showSettings={!hideSettings}
                    fullpageMode={compactMode}
                    severity={analyzeResult.result?.severity}
                    panel={
                        compactMode ? (
                            <NavigationBar
                                onBack={reset}
                                url={searchInput.url}
                                network={searchInput.chainId}
                                address={searchInput.address}
                                disabled={isLoading}
                            />
                        ) : (
                            <SearchBar onChange={setSearchInput} state={searchInput} />
                        )
                    }
                    body={
                        analyzeResult ? (
                            <Results
                                chainId={searchInput.chainId}
                                to={searchInput.address}
                                analyzeResult={analyzeResult}
                                descriptionResult={descriptionResult}
                            />
                        ) : undefined
                    }
                    footer={!compactMode ? <Button type='submit'>Scan</Button> : undefined}
                />
            </form>
            {!hideAlpha && <Banner>BETA</Banner>}
        </ErrorBoundary>
    );
}
