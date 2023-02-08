import styled from 'styled-components';
import * as theme from '../shared/theme';
import * as Types from '../types/api';

interface RiskProps {
    severity: Types.Severity | undefined;
}

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
    color: black;

    font-weight: 400;
    font-size: 13px;
`;

export const Severity = styled.div<RiskProps>`
    display: flex;
    align-items: center;
    gap: 2px;
    font-size: 12px;
    font-weight: 800;
    color: ${(props) => (props.severity ? theme.riskText[props.severity] : theme.riskText.NONE)};
`;

export const SeverityName = styled.div`
    margin-top: 2px;
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
