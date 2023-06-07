import styled, { css } from 'styled-components';

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
        color: #3a0da3;

        & div {
            border-color: #3a0da3;
        }
    }
`;

export const Label = styled.span``;

interface FakeRadioProps {
    checked: boolean;
}

export const FakeRadio = styled.div<FakeRadioProps>`
    border-radius: 50%;
    border: 1.5px #777777 solid;
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
        background-color: #3a0da3;
        transition: 0.15s;
        border-radius: 50%;
        opacity: 0;
    }

    ${(props) =>
        props.checked &&
        css`
            border-color: #3a0da3;
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
