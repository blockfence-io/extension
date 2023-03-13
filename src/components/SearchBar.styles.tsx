import styled from 'styled-components';
import { Severity } from '../types/api';
import * as theme from '../shared/theme';

interface FormProps {
    severity: undefined | Severity;
    compact?: boolean;
}

export const Form = styled.form<FormProps>`
    display: flex;
    flex-direction: row;
    flex: 1;

    font-size: 12px;

    padding: ${(props) => (props.compact ? '10px 6px' : '22px 30px')};
    border-radius: 6px;
    gap: ${(props) => (props.compact ? '10px' : '14px')};

    background: ${(props) => (props.severity ? theme.riskBackground[props.severity] : theme.riskText.NONE)};

    transition: all 0.75s ease;
`;
