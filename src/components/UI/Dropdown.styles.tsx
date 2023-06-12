import styled, { css } from 'styled-components';
import * as theme from '../../shared/theme';

export const Container = styled.div`
    position: relative;
    font-size: 0.8rem;
    display: inline-flex;
    width: 300px;

    flex-direction: column;
`;

export const OptionsSelector = styled.div`
    position: absolute;
    left: 0;
    /* right: 0; */
    top: 0;
    right: 0;
    text-align: center;
    background: white;
    color: black;
    border-radius: 2px;
    z-index: 100;
    overflow: hidden;
    margin-top: 48px;
    margin-left: 0px;

    border-radius: 0 0 12px 12px;
    border: 1px solid ${theme.primaryColor};
    border-top: 0;
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

export const Option = styled.div`
    user-select: none;
    padding: 8px 8px;
    flex-direction: row;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex: 1;
    gap: 12px;
    cursor: pointer;

    &:hover {
        background: ${theme.primaryColor};
        color: white;
    }
`;

interface SelectedPropsProps {
    checked: boolean;
}

export const Selected = styled.div<SelectedPropsProps>`
    display: flex;
    align-items: center;
    padding: 18px 16px;
    font-size: 14px; // TODO

    border: none;
    background: none;

    border-radius: 12px;
    border: 1px solid rgba(142, 142, 142, 0.24);
    transition: 0.2s;

    cursor: pointer;

    &:focus,
    &:hover {
        outline: none;
        border-color: ${theme.primaryColor};
    }

    ${(props) =>
        props.checked &&
        css`
            outline: none;
            border-color: ${theme.primaryColor};
        `}
`;

export const Icon = styled.div`
    width: 28px;
    height: 28px;
`;

export const SmallIcon = styled.div`
    width: 20px;
    height: 20px;
`;

export const Placeholder = styled.div`
    color: ${theme.inputBorderColor};
`;

export const OptionTitle = styled.div`
    margin-left: 1rem;
`;
