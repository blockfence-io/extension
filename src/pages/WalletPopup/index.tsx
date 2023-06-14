import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { useAsync } from 'react-async-hook';

import { Results } from '../../components/Results';
import { ErrorBoundary } from '../../components/CriticalError';
import { Layout, Banner } from '../../components/Layout';
import { Panel } from '../../components/UI/Panel';

import { fetchDescription, fetchAnalyze } from '../../shared/api';
import { TransactionSimulation } from '../../types/api';
import { logPageView } from '../../shared/logs';

import '../../shared/reset.css';
import '../../shared/font.css';
import { Simulation } from '../../components/Simulation';
import { NavigationBar } from '../../components/NavigationBar';

const shouldShowSimulation = (transaction_simulation?: TransactionSimulation) => {
    return (
        transaction_simulation?.outgoing_transaction?.symbol?.length != 0 ||
        transaction_simulation?.incoming_transaction?.symbol?.length != 0
    );
};

function WalletPopup() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const from = urlSearchParams.get('from') || '';
    const to = urlSearchParams.get('to') || '';
    const value = urlSearchParams.get('value') || '';
    const data = urlSearchParams.get('data') || '';
    const chainId: string = urlSearchParams.get('chainId') || '0x1';
    const url: string = urlSearchParams.get('url') || '';
    const descriptionResult = useAsync(fetchDescription, [chainId, to]);
    const analyzeResult = useAsync(fetchAnalyze, [chainId, to, url, from, value, data]);

    const simulationData =
        analyzeResult.result?.transaction_simulation &&
        shouldShowSimulation(analyzeResult.result.transaction_simulation)
            ? analyzeResult.result?.transaction_simulation
            : undefined;

    useEffect(() => {
        logPageView('Wallet Popup');
    }, []);

    return (
        <ErrorBoundary>
            <Layout
                showSettings={false}
                fullpageMode={true}
                severity={analyzeResult.result?.severity}
                panel={
                    analyzeResult.result ? (
                        simulationData ? (
                            <Simulation simulation={simulationData} />
                        ) : (
                            <NavigationBar network={chainId} address={to} url={url} />
                        )
                    ) : (
                        'Analysing...'
                    )
                }
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
            />
            <Banner>BETA</Banner>
        </ErrorBoundary>
    );
}

const container = window.document.querySelector('#app-container');
const root = createRoot(container as Element);
root.render(<WalletPopup />);
