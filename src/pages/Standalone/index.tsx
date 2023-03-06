import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { useAsyncCallback } from 'react-async-hook';

import { Results } from '../../components/Results';
import { SearchBar } from '../../components/SearchBar';
import { ErrorBoundary } from '../../components/CriticalError';
import { Banner } from '../../components/Standalone/Banner';

import { fetchDescription, fetchAnalyze } from '../../shared/api';
import { logPageView, logSearchClick } from '../../shared/logs';

import BlobBig from '../../assets/standalone/blob_big.svg';

import * as Layout from '../../components/Layout.styles';
import * as Styled from './index.styles';

import '../../shared/reset.css';
import '../../shared/font.css';
import { Navbar } from '../../components/Standalone/Navbar';

function App() {
    const [to, setTo] = useState('');
    const [chainId, setChainId] = useState('0x1');
    const descriptionResult = useAsyncCallback(async (chainId, to) => fetchDescription(chainId, to));
    const analyzeResult = useAsyncCallback(async (chainId, to, url) => fetchAnalyze(chainId, to, url));

    useEffect(() => {
        logPageView('Standalone');
    }, []);

    async function handleClick(chainId: string, to: string) {
        setChainId(chainId);
        setTo(to);
        descriptionResult.execute(chainId, to);
        analyzeResult.execute(chainId, to, '');
        logSearchClick(to, chainId);
    }

    return (
        <Styled.Page>
            <Styled.Background>
                <BlobBig />
            </Styled.Background>
            <Styled.Header>
                <Navbar />
            </Styled.Header>
            <Styled.Body>
                <Banner />
                <Styled.Extension>
                    <Styled.LayoutContainer>
                        <ErrorBoundary>
                            {/* <Layout.Banner>ALPHA</Layout.Banner> */}
                            <Layout.Header severity={analyzeResult.result?.severity}>
                                <SearchBar
                                    onClick={handleClick}
                                    disabled={analyzeResult.loading || descriptionResult.loading}
                                />
                            </Layout.Header>
                            <Layout.Body>
                                {to === '' && (
                                    <Styled.Help>
                                        Enter an address to find out more about a smart contract and how it works
                                    </Styled.Help>
                                )}
                                <Results
                                    chainId={chainId}
                                    to={to}
                                    analyzeResult={analyzeResult}
                                    descriptionResult={descriptionResult}
                                />
                            </Layout.Body>
                        </ErrorBoundary>
                    </Styled.LayoutContainer>
                </Styled.Extension>
            </Styled.Body>
        </Styled.Page>
    );
}

const container = window.document.querySelector('#app-container');
const root = createRoot(container as Element);
root.render(<App />);
