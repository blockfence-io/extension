import styled, { css } from 'styled-components';
import * as theme from '../../shared/theme';

const styles = {
    fill: {
        color: 'white',
        backgroundColor: theme.primaryColor,
        borderColor: theme.primaryColor,
        hover: {
            color: theme.primaryColor,
            backgroundColor: `${theme.primaryColor}20`,
            borderColor: theme.primaryColor,
        },
    },
    light: {
        color: theme.primaryColor,
        backgroundColor: 'rgba(58, 13, 163, 0.08)',
        borderColor: 'rgba(58, 13, 163, 0.08)',
        hover: {
            color: 'white',
            backgroundColor: theme.primaryColor,
            borderColor: theme.primaryColor,
        },
    },
};

interface ButtonProps {
    variant: 'light' | 'fill';
    iconOnly?: boolean;
}

export const Button = styled.button<ButtonProps>`
    font-weight: bold;
    font-size: 16px;
    line-height: 1;

    padding: 16px 22px;
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    transition: 0.1s;

    & svg {
        padding: 0;
    }

    &:disabled {
        opacity: 0.5;
    }

    color: ${(props) => styles[props.variant].color};
    background-color: ${(props) => styles[props.variant].backgroundColor};
    border: 2px solid ${(props) => styles[props.variant].borderColor};
    &:hover:enabled {
        background: ${(props) => styles[props.variant].hover.backgroundColor};
        color: ${(props) => styles[props.variant].hover.color};
    }

    ${(props) =>
        props.iconOnly &&
        css`
            line-height: 0;
            padding: 11px 13px;
            border: 0;
        `}
`;
