import React from 'react';
import { createRoot } from 'react-dom/client';

import { Button } from '../../components/Button';
import '../../shared/reset.css';
import * as Styled from './index.styled';

function Panel() {
    function triggerPopup() {
        console.log('# Triggering popup');
        chrome.runtime.sendMessage({ data: 'Hello from content script!' }, function (response) {
            console.log(response);
        });
    }

    return (
        <Styled.Container>
            <h1>blockfence</h1>
            <Button onClick={triggerPopup}>Trigger popup</Button>
        </Styled.Container>
    );
}

const container = window.document.querySelector('#app-container');
const root = createRoot(container as Element);
root.render(<Panel />);
