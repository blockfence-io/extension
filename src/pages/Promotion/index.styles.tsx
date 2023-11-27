import styled, { css } from 'styled-components';

import * as theme from '../../shared/theme';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100vh;

    color: ${theme.primaryBackground};
    background: ${theme.primaryColor};

    padding: 2rem 1rem;
`;

export const Header = styled.div`
    font-weight: 500;
    font-size: 24px;
`;

export const Body = styled.div`
    padding: 2rem;
    border-radius: 8px;
    background: ${theme.primaryBackground};
    color: ${theme.primaryColor};

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    & input {
        background: white;
        min-width: 300px;
    }
`;

export const Message = styled.div`
    font-size: 16px;
    text-align: center;
    margin: 0 1%;
    line-height: 2;
`;
