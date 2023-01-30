import styled from 'styled-components';
import * as theme from '../shared/theme';

interface RiskProps {
    severity: undefined | 'medium' | 'high';
}

export const Container = styled.div<RiskProps>`
    color: white;
    background: ${(props) => (props.severity ? theme.riskText[props.severity] : theme.riskText.normal)};

    display: flex;
    flex-direction: column;
    padding: 16px 20px 0 20px;
    gap: 16px;

    font-size: 12px;
`;

export const InfoList = styled.div`
    display: flex;
    gap: 12px;
`;

export const Risk = styled.div<RiskProps>`
    font-size: 20px;
    font-weight: bold;
    border-radius: 5px 5px 0px 0px;

    color: ${(props) => (props.severity ? theme.riskText[props.severity] : theme.riskText.normal)};
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
