import React from 'react';
import { Loader } from './UI/Loader';
import * as Styled from './PagesMessages.styles';

interface ErrorMessageProps {
    children: React.ReactNode;
    withIcon?: boolean;
}

export function ErrorMessage({ children, withIcon = false }: ErrorMessageProps) {
    return (
        <Styled.Error>
            {withIcon && <Styled.SadFace>:(</Styled.SadFace>}
            <div>{children}</div>
        </Styled.Error>
    );
}

export function LoadingMessage() {
    return (
        <Styled.LoadingContainer>
            <Loader />
        </Styled.LoadingContainer>
    );
}
