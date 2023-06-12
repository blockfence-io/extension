import React from 'react';

import * as Styled from './Button.styles';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    iconOnly?: boolean;
    variant?: 'light' | 'fill';
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'fill', iconOnly = false, ...rest }) => {
    return (
        <Styled.Button variant={variant} iconOnly={iconOnly} {...rest}>
            {children}
        </Styled.Button>
    );
};
