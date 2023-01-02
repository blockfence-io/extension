import React, { useState } from 'react';
import { render } from 'react-dom';
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
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: black;
    height: 100vh;
    color: white;

    & h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
    }
    & h2 {
        font-size: 1.5rem;
        margin-bottom: 4rem;
    }
`;

function Panel() {
    const [counter, setCounter] = useState(0);
    return (
        <Container>
            <h1>Blockfence</h1>

            <h2>No Facebook for you</h2>

            <p>In the meanwhilte, I can count your clicks... You have clicked {counter} times</p>
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

render(<Panel />, window.document.querySelector('#app-container'));
