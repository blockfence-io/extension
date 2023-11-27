import React from 'react';
import { createRoot } from 'react-dom/client';

import { ErrorBoundary } from '../../components/CriticalError';
import { Button } from '../../components/UI/Button';
import { Input } from '../../components/UI/Input';

import '../../shared/reset.css';
import '../../shared/font.css';

import * as Styled from './index.styles';

import Logo from '../../assets/logo-white.svg';

function WalletPopup() {
    return (
        <ErrorBoundary>
            <Styled.Container>
                <Logo style={{ height: '80px' }} />

                <Styled.Header>Congratulations!</Styled.Header>

                <Styled.Message>
                    You are eligible for a free NFT that will give you free access to Dappradar PRO.
                </Styled.Message>

                <Styled.Body>
                    <Input title='Email' placeholder='Enter address' />
                    <Button>Claim your reward now</Button>
                    <p>
                        For more details:{' '}
                        <a href='https://dappradar.com/rewards/quests' target='_blank' rel='noreferrer'>
                            https://dappradar.com/rewards/quests
                        </a>
                    </p>
                </Styled.Body>
            </Styled.Container>
        </ErrorBoundary>
    );
}

const container = window.document.querySelector('#app-container');
const root = createRoot(container as Element);
root.render(<WalletPopup />);
