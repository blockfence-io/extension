import React from 'react';
import { createRoot } from 'react-dom/client';

import { Button } from '../../components/UI/Button';
import '../../shared/reset.css';
import * as Styled from './index.styled';

function Panel() {
    return (
        <Styled.Container>
            <h1>blockfence</h1>
            <h3>Checking your transaction....</h3>
            <Button>Decline</Button>
            <Button>Continue</Button>
        </Styled.Container>
    );
}

const container = window.document.querySelector('#app-container');
const root = createRoot(container as Element);
root.render(<Panel />);
