import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import getUrlParams from '../../helpers/getURLParams';

import { Button } from '../../components/Button';
import '../../shared/reset.css';
import * as Styled from './index.styled';

function Panel() {
    const [counter, setCounter] = useState(0);
    const urlParams = getUrlParams();
    console.log(urlParams);

    return (
        <Styled.Container>
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
        </Styled.Container>
    );
}

const container = window.document.querySelector('#app-container');
const root = createRoot(container as Element);
root.render(<Panel />);
