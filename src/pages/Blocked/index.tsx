import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import styled from 'styled-components';
import getUrlParams from '../../helpers/getURLParams';
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
        margin-bottom: 2rem;
    }

    & h3 {
        font-size: 1.2rem;
        margin-bottom: 4rem;
    }
`;

function Panel() {
    const [counter, setCounter] = useState(0);
    const urlParams = getUrlParams();
    console.log(urlParams);

    return (
        <Container>
            <h1>Blockfence</h1>

            <h2>Whoops... This website looks suspicious</h2>

            <h3>{urlParams.url}</h3>

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

const container = window.document.querySelector('#app-container');
const root = createRoot(container as Element);
root.render(<Panel />);
