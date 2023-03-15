import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';

import { Banner } from '../../components/Standalone/Banner';
import { Navbar } from '../../components/Standalone/Navbar';
import { PopupPanel } from '../Popup';

import { logPageView } from '../../shared/logs';

import BlobBig from '../../assets/standalone/blob_big.svg';

import * as Styled from './index.styles';

import '../../shared/reset.css';
import '../../shared/font.css';

function App() {
    useEffect(() => {
        logPageView('Standalone');
    }, []);

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
                        <PopupPanel hideAlpha hideSettings />
                    </Styled.LayoutContainer>
                </Styled.Extension>
            </Styled.Body>
        </Styled.Page>
    );
}

const container = window.document.querySelector('#app-container');
const root = createRoot(container as Element);
root.render(<App />);
