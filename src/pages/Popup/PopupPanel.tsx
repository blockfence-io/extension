import React, { useEffect, useState } from 'react';
import { useAsyncCallback } from 'react-async-hook';

import { Results } from '../../components/Results';
import { NavigationBar } from '../../components/NavigationBar';
import { SearchBar, SearchMode, SearchState } from '../../components/SearchBar';
import { ErrorBoundary } from '../../components/CriticalError';
import { Layout, Banner } from '../../components/Layout';
import { Button } from '../../components/UI/Button';

import { fetchAnalyze, fetchDescription } from '../../shared/api';
import { logAddressSearchClick, logUrlSearchClick } from '../../shared/logs';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import '../../shared/reset.css';
import '../../shared/font.css';
import 'overlayscrollbars/overlayscrollbars.css';

import { getPrefferedChinId, setPreferredChainId } from '../../shared/storage';

interface PopupPanelProps {
    hideAlpha?: boolean;
    hideSettings?: boolean;
}

const emptyState = {
    mode: SearchMode.Address,
    chainId: '1',
    url: '',
    address: '',
};

export function PopupPanel({ hideAlpha = false, hideSettings = false }: PopupPanelProps) {
    const [compactMode, setCompactMode] = useState(false);
    const [searchInput, setSearchInput] = useState<SearchState>(emptyState);

    const initChainId = async () => {
        const chainId = await getPrefferedChinId();
        setSearchInput({ ...searchInput, chainId });
    };
    useEffect(() => {
        initChainId();
    }, []);

    const descriptionResult = useAsyncCallback(async (chainId, to) => fetchDescription(chainId, to));
    const analyzeResult = useAsyncCallback(async (chainId, to, url) => fetchAnalyze(chainId, to, url));

    async function submitUrl(url: string) {
        searchInput.address = '';
        searchInput.chainId = '';
        setSearchInput(searchInput);
        setCompactMode(true);
        analyzeResult.execute(undefined, undefined, url);
        logUrlSearchClick(url);
    }

    async function submitAddress(chainId: string, to: string) {
        searchInput.url = '';
        setSearchInput(searchInput);
        setCompactMode(true);
        descriptionResult.execute(chainId, to);
        analyzeResult.execute(chainId, to, undefined);
        logAddressSearchClick(to, chainId);
    }

    function onSetSearchInput(state: SearchState) {
        setPreferredChainId(state.chainId);
        setSearchInput(state);
    }

    async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        if (searchInput.mode === SearchMode.Address) {
            if (searchInput.address !== '') await submitAddress(searchInput.chainId, searchInput.address);
        } else {
            if (searchInput.url !== '') await submitUrl(searchInput.url);
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
            <OverlayScrollbarsComponent defer style={{ width: '376px', height: '600px' }}>
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
                                <SearchBar onChange={onSetSearchInput} state={searchInput} />
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
            </OverlayScrollbarsComponent>
            {!hideAlpha && <Banner>BETA</Banner>}
        </ErrorBoundary>
    );
}
