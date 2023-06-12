import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { useAsync } from 'react-async-hook';

import { Results } from '../../components/Results';
import { ErrorBoundary } from '../../components/CriticalError';
import { Layout, Banner } from '../../components/New/Layout';

import { fetchDescription, fetchAnalyze } from '../../shared/api';

import '../../shared/reset.css';
import '../../shared/font.css';

import { logPageView } from '../../shared/logs';

function Panel() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const from = urlSearchParams.get('from') || '';
    const to = urlSearchParams.get('to') || '';
    const value = urlSearchParams.get('value') || '';
    const data = urlSearchParams.get('data') || '';
    const chainId: string = urlSearchParams.get('chainId') || '0x1';
    const url: string = urlSearchParams.get('url') || '';
    const descriptionResult = useAsync(fetchDescription, [chainId, to]);
    const analyzeResult = useAsync(fetchAnalyze, [chainId, to, url, from, value, data]);

    useEffect(() => {
        logPageView('Wallet Popup');
    }, []);

    return (
        <ErrorBoundary>
            <Layout
                showSettings={false}
                fullpageMode={true}
                severity={analyzeResult.result?.severity}
                panel={<div>TBD Transaction Simulation</div>}
                body={
                    analyzeResult ? (
                        <Results
                            chainId={chainId}
                            to={to}
                            analyzeResult={analyzeResult}
                            descriptionResult={descriptionResult}
                            url={url}
                        />
                    ) : undefined
                }
                footer={<div>Footer</div>}
            />
            <Banner>BETA</Banner>
        </ErrorBoundary>
    );
}

const container = window.document.querySelector('#app-container');
const root = createRoot(container as Element);
root.render(<Panel />);
