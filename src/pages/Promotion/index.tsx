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

function visitDappradar() {
    window.open('https://dappradar.com/account/pro-membership', '_blank');
}

function PromotionPopup() {
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | undefined>();

    async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        setLoading(true);
        setError(undefined);
        try {
            const result = await questReward({ email: value });
            if (result.success) setSubmitted(true);
            else setError(errorMessage);
        } catch (error) {
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    }

    return (
        <ErrorBoundary>
            <Styled.Container onSubmit={handleSubmit}>
                <Logo style={{ height: '80px' }} />
                <Styled.Header>Thank you for using Blockfence</Styled.Header>
                <Styled.Message>
                    <br /> Here's a little surprise from us...
                    <br /> You just unlocked <b>1-month</b> of free access to the data analytics platform{' '}
                    <Styled.Link onClick={visitDappradar}>DappRadar PRO</Styled.Link>
                </Styled.Message>

                <Styled.Body>
                    {!submitted && (
                        <>
                            <Input
                                title='Email'
                                type='email'
                                placeholder='Email address'
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                            />
                            <Button type='submit' disabled={loading}>
                                Send instructions how to claim{' '}
                            </Button>
                        </>
                    )}
                    {submitted && !error && (
                        <Styled.Success>
                            We have sent the reward to your email.
                            <br />
                            Please check your inbox for further instructions.
                        </Styled.Success>
                    )}
                    {error && <Styled.Error>{error}</Styled.Error>}

                    {/* TODO Swap the quest URL with the blockfence quest */}
                    <p>
                        Blockfence and DappRadar will never send you spam and will never share your email address with
                        anyone.
                    </p>
                </Styled.Body>
            </Styled.Container>
        </ErrorBoundary>
    );
}

const container = window.document.querySelector('#app-container');
const root = createRoot(container as Element);
root.render(<PromotionPopup />);
