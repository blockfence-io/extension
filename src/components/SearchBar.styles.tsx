import styled from 'styled-components';
import * as theme from '../shared/theme';

interface RiskProps {
    severity: undefined | 'medium' | 'high';
}

export const Form = styled.form<RiskProps>`
    color: white;
    background: ${(props) => (props.severity ? theme.riskText[props.severity] : theme.riskText.normal)};

    width: 376px;

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px 20px;
    gap: 8px;

    font-size: 12px;
`;
