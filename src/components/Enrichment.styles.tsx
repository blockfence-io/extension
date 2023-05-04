import styled from 'styled-components';
import * as theme from '../shared/theme';

export const Title = styled.div`
    font-weight: bold;
    margin-bottom: 4px;
    margin-top: 8px;
    font-size: 12px;

    &:first-of-type {
        margin-top: 0px;
    }
`;

export const PoweredBy = styled.div`
    color: black;
    font-size: 10px;
    margin-top: 12px;

    display: flex;
    align-items: center;

    & svg {
        margin-right: 6px;
        margin-bottom: 1px;
    }
`;

export const CenteredIconWithText = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Icon = styled.a`
padding-right: 6px;
`;

export const ExtensionsLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: normal;
    color: ${theme.primaryColor};

    font-weight: normal;
    color: #0d37a3;
    margin-bottom: 8px;
    border: 1px solid #0d37a3;
    border-radius: 6px;
    padding: 6px;
    font-size: 12px;
    text-align: center;
    opacity: 0.7;

    &:hover {
        text-decoration: none;
        opacity: 1;
    }
`;
