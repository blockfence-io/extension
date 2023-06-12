import styled, { css } from 'styled-components';
import * as theme from '../../shared/theme';

export const Container = styled.button`
    display: inline-flex;
    align-items: center;
    gap: 8px;

    background: inherit;
    border: none;
    outline: none;
    font-size: 14px;

    cursor: pointer;

    &:hover,
    &:focus {
        color: ${theme.primaryColor};

        & div {
            border-color: ${theme.primaryColor};
        }
    }
`;

export const Label = styled.span``;

interface FakeRadioProps {
    checked: boolean;
}

export const FakeRadio = styled.div<FakeRadioProps>`
    border-radius: 50%;
    border: 1.5px ${theme.inputBorderColor} solid;
    width: 16px;
    height: 16px;

    /* Check Circle */
    position: relative;
    &::before {
        position: absolute;
        content: '';
        height: 9px;
        width: 9px;
        left: 2px;
        bottom: 2px;
        /* CIRCLE: Disabled State */
        background-color: ${theme.primaryColor};
        transition: 0.15s;
        border-radius: 50%;
        opacity: 0;
    }

    ${(props) =>
        props.checked &&
        css`
            border-color: ${theme.primaryColor};
            &::before {
                opacity: 1;
            }
        `}
`;

export const GroupContainer = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 2px;
`;
