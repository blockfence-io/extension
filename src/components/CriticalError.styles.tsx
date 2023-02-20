import styled from 'styled-components';
import * as theme from '../shared/theme';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

export const Logo = styled.div`
    flex: 2;
    background: ${theme.primaryBackground};
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-weight: 800;

    & svg {
        width: 70px;
    }
`;

export const Message = styled.div`
    flex: 1;
    color: ${theme.primaryColor};

    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    line-height: 30px;
    font-size: 14px;
    font-weight: 400;
`;
