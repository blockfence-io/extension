import React from 'react';
import { createRoot } from 'react-dom/client';

import { ContentDecoder } from '../../components/ContentDecoder';
import { WebsiteURL, GithubURL } from '../../components/WebsiteURL';
import * as Styled from './index.styled';

import '../../shared/reset.css';
import '../../shared/font.css';

function Panel() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const to = urlSearchParams.get('to');
    const chainId: string = urlSearchParams.get('chainId') || '0x1';

    return (
        <Styled.Container>
            <Styled.Title>
                blockfence | <span style={{ fontWeight: 300 }}>contract decoder</span>
            </Styled.Title>

            {to && <ContentDecoder chainId={chainId} to={to} showAccountAddress={true} />}
            <Styled.Footer>
                <WebsiteURL />
                <GithubURL />
            </Styled.Footer>
        </Styled.Container>
    );
}

const container = window.document.querySelector('#app-container');
const root = createRoot(container as Element);
root.render(<Panel />);
