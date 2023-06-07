import React, { InputHTMLAttributes } from 'react';
import * as Styled from './Input.styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    title?: string;
};

export function Input({ title, ...rest }: InputProps) {
    return (
        <Styled.Container>
            {title && <Styled.Title>{title}</Styled.Title>}
            <Styled.Input {...rest} />
        </Styled.Container>
    );
}
