import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import LogoWhite from '../assets/logo-sad-white.svg';

import * as Styled from './CriticalError.styles';

export function ErrorPage() {
    return (
        <Styled.Container role='alert'>
            <Styled.Logo>
                <LogoWhite />
            </Styled.Logo>
            <Styled.Message>
                Whoops looks like something went wrong
                <br />
                Please try again
            </Styled.Message>
        </Styled.Container>
    );
}

interface ErrorBoundaryProps {
    children: React.ReactNode;
}

export function ErrorBoundary({ children }: ErrorBoundaryProps) {
    return (
        <ReactErrorBoundary
            FallbackComponent={ErrorPage}
            onReset={() => {
                // reset the state of your app so the error doesn't happen again
            }}
        >
            {children}
        </ReactErrorBoundary>
    );
}
