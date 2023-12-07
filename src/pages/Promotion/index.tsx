import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

import { ErrorBoundary } from '../../components/CriticalError';
import { Button } from '../../components/UI/Button';
import { Input } from '../../components/UI/Input';

import '../../shared/reset.css';
import '../../shared/font.css';

import * as Styled from './index.styles';

import Logo from '../../assets/logo-white.svg';
import { questReward } from '../../shared/api';

const errorMessage = 'Error occurred while submitting your reward, please try again.';

function WalletPopup() {
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | undefined>();

    async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        await setLoading(true);
        setError(undefined);
        try {
            const result = await questReward({ email: value });
            if (result.success) setSubmitted(true);
            else setError(errorMessage);
        } catch (error) {
            setError(errorMessage);
        } finally {
            await setLoading(false);
        }
    }

    return (
        <ErrorBoundary>
            <Styled.Container onSubmit={handleSubmit}>
                <Logo style={{ height: '80px' }} />

                <Styled.Header>Congratulations!</Styled.Header>

                <Styled.Message>
                    You are eligible for a free NFT that will give you free access to Dappradar PRO.
                </Styled.Message>

                <Styled.Body>
                    {!submitted && (
                        <>
                            <Input
                                title='Email'
                                type='email'
                                placeholder='Enter address'
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                            />
                            <Button type='submit' disabled={loading}>
                                Claim your reward now
                            </Button>
                        </>
                    )}
                    {submitted && !error && (
                        <Styled.Success>
                            We have sent the reward to your email.
                            <br /> Check your inbox for further instructions.
                        </Styled.Success>
                    )}
                    {error && <Styled.Error>{error}</Styled.Error>}

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
