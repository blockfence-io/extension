import styled from 'styled-components';
import * as theme from '../shared/theme';

export const Container = styled.div`
    position: relative;
    font-size: 0.8rem;
    display: inline-flex;
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
    margin-top: 32px;
    margin-left: 0px;

    border-radius: 0 0 4px 4px;
    border: 1px solid #3a0da454;
    border-top: 0;
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

    &:hover {
        background: ${theme.primaryColor};
        color: white;
    }
`;

export const Selected = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 6px 8px;
    border-radius: 4px;
    gap: 8px;

    user-select: none;
    transition: 0.1s;

    &:hover {
        background: #bcffbc40;
        border: 1px solid rgba(255, 255, 255, 0.5);
    }
`;

export const Icon = styled.div`
    width: 28px;
    height: 28px;
`;

export const SmallIcon = styled.div`
    width: 20px;
    height: 20px;
`;
