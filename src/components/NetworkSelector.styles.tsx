import styled from 'styled-components';
import * as theme from '../shared/theme';

export const Container = styled.div`
    display: inline-flex;
    align-items: center;
    position: relative;
    font-size: 0.8rem;
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 4px 8px;
    border-radius: 4px;

    user-select: none;
    transition: 0.1s;

    &:hover {
        background: #bcffbc40;
        border: 1px solid rgba(255, 255, 255, 0.5);
    }
`;

export const Options = styled.div`
    position: absolute;
    left: 0;
    /* right: 0; */
    top: 0;
    text-align: center;
    background: white;
    color: black;
    border-radius: 2px;
    z-index: 100;
    overflow: hidden;
    margin-top: 24px;
    margin-left: -1px;

    border-radius: 0 0 4px 4px;
    border: 1px solid #3a0da454;
    border-top: 0;
`;

export const Option = styled.div`
    user-select: none;
    padding: 8px 8px;

    &:hover {
        background: ${theme.primaryColor};
        color: white;
    }
`;

export const Selected = styled.div``;
