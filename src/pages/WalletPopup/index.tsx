import React from 'react';
import { createRoot } from 'react-dom/client';
import { useAsync } from 'react-async-hook';

import * as Layout from '../../components/Layout.styles';
import { ContentDecoder } from '../../components/ContentDecoder';
import { ErrorMessage, LoadingMessage } from '../../components/PageMessages';
import { WebsiteURL, GithubURL } from '../../components/WebsiteURL';

import { fetchResult } from '../../shared/api';

import '../../shared/reset.css';
import '../../shared/font.css';

function Panel() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const to = urlSearchParams.get('to') || '';
    const chainId: string = urlSearchParams.get('chainId') || '0x1';
    const asyncResults = useAsync(fetchResult, [chainId, to]);

    return (
        <Layout.Container style={{ minHeight: 'initial' }}>
            <Layout.Body>
                {asyncResults.loading && <LoadingMessage />}
                {asyncResults.error && <ErrorMessage>{asyncResults.error.message}</ErrorMessage>}
                {asyncResults.result && to && <ContentDecoder chainId={chainId} to={to} result={asyncResults.result} />}
            </Layout.Body>
            <Layout.Footer>
                <WebsiteURL />
                <GithubURL />
            </Layout.Footer>
        </Layout.Container>
    );
}

const container = window.document.querySelector('#app-container');
const root = createRoot(container as Element);
root.render(<Panel />);
