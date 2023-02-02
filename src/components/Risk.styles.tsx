import styled from 'styled-components';
import * as theme from '../shared/theme';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2px 10px;

    &:not(:last-child) {
        border-bottom: 1px ${theme.fieldBorder} solid;
    }
`;

export const Header = styled.div`
    font-size: 16;
    font-weight: bold;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    user-select: none;
    cursor: pointer;

    padding: 8px 0;
`;

export const Title = styled.div`
    flex: 1;
    font-weight: 300;
`;

export const Severity = styled.div`
    font-weight: 700;
    color: ${theme.riskText.MEDIUM};
`;

export const Icon = styled.div``;

export const Action = styled.div``;

export const Body = styled.div`
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    color: #707070;
    margin-bottom: 16px;
`;

export const Finding = styled.div``;
