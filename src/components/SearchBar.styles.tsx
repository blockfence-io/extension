import styled from 'styled-components';
import * as theme from '../shared/theme';
import { Severity } from '../types/api';

interface RiskProps {
    severity: undefined | Severity;
}

export const Form = styled.form<RiskProps>`
    color: white;
    background: ${(props) => (props.severity ? theme.riskText[props.severity] : theme.riskText.NONE)};

    width: 376px;

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px 20px;
    gap: 8px;

    font-size: 12px;
`;
