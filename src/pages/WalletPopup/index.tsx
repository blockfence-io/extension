import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { useAsync } from 'react-async-hook';

import * as Layout from '../../components/Layout.styles';
import { ContentDecoder } from '../../components/ContentDecoder';
import { ErrorMessage, LoadingMessage } from '../../components/PageMessages';
import { WebsiteURL, GithubURL } from '../../components/WebsiteURL';
import { ErrorBoundary } from '../../components/CriticalError';

import { fetchDescription, fetchAnalyze } from '../../shared/api';
import { logPageView } from '../../shared/logs';

import '../../shared/reset.css';
import '../../shared/font.css';

function Panel() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const to = urlSearchParams.get('to') || '';
    const chainId: string = urlSearchParams.get('chainId') || '0x1';
    const descriptionResult = useAsync(fetchDescription, [chainId, to]);
    const analyzeResult = useAsync(fetchAnalyze, [chainId, to]);

    useEffect(() => {
        logPageView('Wallet Popup');
    }, []);

    const chatError =
        "GPT-3's experiencing some technical difficulties, but don't worry, our team's on it. In the meantime, give it another try or holla at us if you need a hand.";

    return (
        <Layout.Container style={{ minHeight: 'initial' }}>
            <ErrorBoundary>
                <Layout.Banner>ALPHA</Layout.Banner>
                <Layout.Body>
                    {analyzeResult.loading && <LoadingMessage />}
                    {analyzeResult.error && <ErrorMessage>{analyzeResult.error.message}</ErrorMessage>}
                    {analyzeResult.result && (
                        <ContentDecoder
                            chainId={chainId}
                            to={to}
                            analyzeResult={analyzeResult.result}
                            descriptionResult={
                                descriptionResult.error ? chatError : descriptionResult.result?.description
                            }
                        />
                    )}
                </Layout.Body>
                <Layout.Footer>
                    <WebsiteURL />
                    <GithubURL />
                </Layout.Footer>
            </ErrorBoundary>
        </Layout.Container>
    );
}

const container = window.document.querySelector('#app-container');
const root = createRoot(container as Element);
root.render(<Panel />);
