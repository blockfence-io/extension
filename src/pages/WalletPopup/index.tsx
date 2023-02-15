import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';

import * as Layout from '../../components/Layout.styles';
import { ContentDecoder } from '../../components/ContentDecoder';
import { ErrorMessage, LoadingMessage } from '../../components/PageMessages';
import { WebsiteURL, GithubURL } from '../../components/WebsiteURL';

import { useGetResults } from '../../shared/api';

import '../../shared/reset.css';
import '../../shared/font.css';

function Panel() {
    const { result, isLoading, error, fatalError, getData } = useGetResults();

    const urlSearchParams = new URLSearchParams(window.location.search);
    const to = urlSearchParams.get('to');
    const chainId: string = urlSearchParams.get('chainId') || '0x1';

    useEffect(() => {
        if (to) {
            getData(to, chainId);
        }
    }, [to, chainId]);

    return (
        <Layout.Container style={{ minHeight: 'initial' }}>
            <Layout.Banner>ALPHA</Layout.Banner>
            <Layout.Body>
                {isLoading && <LoadingMessage />}
                {error && <ErrorMessage>{error}</ErrorMessage>}
                {fatalError && (
                    <ErrorMessage withIcon>Whoops! It looks like we have encountered an unexpected error</ErrorMessage>
                )}

                {result && to && <ContentDecoder chainId={chainId} to={to} result={result} />}
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
