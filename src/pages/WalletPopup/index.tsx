import React from 'react';
import { createRoot } from 'react-dom/client';

import { ContentDecoder } from '../../components/ContentDecoder';
import { WebsiteURL } from '../../components/WebsiteURL';
import * as Styled from './index.styled';

import '../../shared/reset.css';
import '../../shared/font.css';

function Panel() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const to = urlSearchParams.get('to');

    return (
        <Styled.Container>
            <Styled.Title>
                blockfence | <span style={{ fontWeight: 300 }}>contract decoder</span>
            </Styled.Title>

            {to && <ContentDecoder to={to} showAccountAddress={true} />}
            <WebsiteURL />
        </Styled.Container>
    );
}

const container = window.document.querySelector('#app-container');
const root = createRoot(container as Element);
root.render(<Panel />);
