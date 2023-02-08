import styled from 'styled-components';
import * as theme from '../shared/theme';
import { Severity } from '../types/api';

interface RiskProps {
    severity: undefined | Severity;
}

export const Form = styled.form<RiskProps>`
    display: flex;
    flex-direction: row;
    /* align-items: center; */
    gap: 8px;
    flex: 1;

    font-size: 12px;
`;
