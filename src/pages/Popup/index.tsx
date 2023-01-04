import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

import { Button } from '../../components/Button';
import '../../shared/reset.css';
import * as Styled from './index.styled';

function Panel() {
    const [counter, setCounter] = useState(0);
    return (
        <Styled.Container>
            <h1>A react popup</h1>
            <p>{counter} clicks</p>
            <Button
                onClick={() => {
                    setCounter(counter + 1);
                }}
            >
                Click
            </Button>
        </Styled.Container>
    );
}

const container = window.document.querySelector('#app-container');
const root = createRoot(container as Element);
root.render(<Panel />);
