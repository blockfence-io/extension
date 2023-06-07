import styled from 'styled-components';
import * as theme from '../../shared/theme';

export const Container = styled.div`
    position: relative;
`;

export const Title = styled.label`
    background: white;
    padding: 0px 4px;
    position: absolute;

    left: 12px;
    top: -7px;

    color: #8e8e8e;
    font-size: 11px;
    font-weight: 500;

    z-index: 1;
`;

export const Input = styled.input`
    padding: 18px 16px;
    font-size: 14px; // TODO

    border: none;
    background: none;

    border-radius: 12px;
    border: 1px solid rgba(142, 142, 142, 0.24);
    transition: 0.2s;

    &::placeholder {
        color: ${theme.inputBorderColor};
    }

    &:focus {
        outline: none;
        border-color: ${theme.primaryColor};
    }

    &:invalid {
        border-color: ${theme.errorColor};
    }
`;
