import React from 'react';
import { createRoot } from 'react-dom/client';

import { ContentDecoder } from '../../components/ContentDecoder';
import { WebsiteURL, GithubURL } from '../../components/WebsiteURL';

import * as Layout from '../../components/Layout.styles';

import '../../shared/reset.css';
import '../../shared/font.css';

function Panel() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const to = urlSearchParams.get('to');
    const chainId: string = urlSearchParams.get('chainId') || '0x1';

    return (
        <Layout.Container style={{ minHeight: 'initial' }}>
            <Layout.Body>{to && <ContentDecoder chainId={chainId} to={to} />}</Layout.Body>
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
