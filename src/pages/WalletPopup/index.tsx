import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { useAsync } from 'react-async-hook';

import * as Layout from '../../components/Layout.styles';
import { Results } from '../../components/Results';
import { WebsiteURL, GithubURL, FeedbackURL } from '../../components/WebsiteURL';
import { ErrorBoundary } from '../../components/CriticalError';

import { fetchDescription, fetchAnalyze } from '../../shared/api';

import '../../shared/reset.css';
import '../../shared/font.css';

import { logPageView } from '../../shared/logs';

function Panel() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const to = urlSearchParams.get('to') || '';
    const chainId: string = urlSearchParams.get('chainId') || '0x1';
    const url: string = urlSearchParams.get('url') || '';
    const descriptionResult = useAsync(fetchDescription, [chainId, to]);
    const analyzeResult = useAsync(fetchAnalyze, [chainId, to, url]);

    useEffect(() => {
        logPageView('Wallet Popup');
    }, []);

    return (
        <Layout.Container style={{ minHeight: 'initial' }}>
            <ErrorBoundary>
                <Layout.Banner>BETA</Layout.Banner>
                <Layout.Body>
                    <Results
                        chainId={chainId}
                        to={to}
                        analyzeResult={analyzeResult}
                        descriptionResult={descriptionResult}
                    />
                </Layout.Body>
                <Layout.Footer>
                    <WebsiteURL iconOnly />
                    <GithubURL iconOnly />
                    <FeedbackURL style={{ flex: 1 }} />
                    {/* <Layout.Beta>BETA</Layout.Beta> */}
                </Layout.Footer>
            </ErrorBoundary>
        </Layout.Container>
    );
}

const container = window.document.querySelector('#app-container');
const root = createRoot(container as Element);
root.render(<Panel />);
