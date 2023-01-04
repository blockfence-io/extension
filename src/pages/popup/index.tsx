import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import styled from 'styled-components';

import '../../shared/reset.css';

const Button = styled.button`
    background: palevioletred;
    color: white;

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

const Container = styled.div`
    padding: 1rem;
    min-width: 200px;
    min-height: 200px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

function Panel() {
    const [counter, setCounter] = useState(0);
    return (
        <Container>
            <h1>A react popup</h1>
            <p>{counter} clicks</p>
            <Button
                onClick={() => {
                    setCounter(counter + 1);
                }}
            >
                Click
            </Button>
        </Container>
    );
}

const container = window.document.querySelector('#app-container');
const root = createRoot(container as Element);
root.render(<Panel />);
