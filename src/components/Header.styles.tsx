import styled from 'styled-components';

import { Link } from './UI/Link';
import * as Types from '../types/api';
import * as theme from '../shared/theme';

interface RiskProps {
    severity: Types.Severity;
}

export const Container = styled.div<RiskProps>`
    color: white;
    background: ${(props) => theme.riskBackground[props.severity]};

    display: flex;
    flex-direction: column;
    padding: 16px 20px 0 20px;
    gap: 16px;

    font-size: 12px;

    & > ${Link} {
        color: white;
    }
`;

export const InfoList = styled.div`
    display: flex;
    gap: 12px;
`;

export const Risk = styled.div<RiskProps>`
    font-size: 20px;
    font-weight: bold;
    border-radius: 5px 5px 0px 0px;

    color: ${(props) => theme.riskText[props.severity]};
    background: white;
    text-align: center;
    padding: 14px;
    text-transform: uppercase;

    margin: 0 40px;
`;

const Group = styled.div`
    flex: 1 1 0;

    display: flex;
    flex-direction: column;
    gap: 4px;

    overflow: hidden;
`;

const Title = styled.div`
    font-weight: 300;
`;

const Value = styled.div`
    font-size: 14px;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Info = {
    Group,
    Title,
    Value,
};

export const Fill = styled.div`
    flex: 1;
`;
