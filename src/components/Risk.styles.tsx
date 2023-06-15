import styled from 'styled-components';
import * as theme from '../shared/theme';
import * as Types from '../types/api';

interface RiskProps {
    severity: Types.Severity | undefined;
}

export const RiskGroup = styled.div`
    border-radius: 6px;
    border: 1px #f0f0f0 solid;
    padding: 8px 14px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        border-bottom: 1px ${theme.fieldBorder} solid;
    }
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    user-select: none;
    cursor: pointer;

    padding: 12px 0;
`;

export const Title = styled.div`
    flex: 1;
    color: black;

    font-weight: 500;
    font-size: 12px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Severity = styled.div<RiskProps>`
    display: flex;
    align-items: center;
    gap: 2px;
    font-size: 12px;
    font-weight: 800;
    color: ${(props) => (props.severity ? theme.riskText[props.severity] : theme.riskText.NONE)};

    & > svg {
        width: 24px;
    }
`;

export const SeverityName = styled.div`
    margin-top: 2px;
`;

export const Icon = styled.div`
    display: flex;
    justify-content: center;
`;

export const Action = styled.div``;

export const Body = styled.div`
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    color: #707070;
    margin-bottom: 16px;
`;

export const Finding = styled.div``;
