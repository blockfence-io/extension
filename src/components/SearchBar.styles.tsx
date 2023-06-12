import styled from 'styled-components';
import * as theme from '../shared/theme';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    flex: 1;

    font-size: 12px;
    padding: 0px;
    border-radius: 6px;
    gap: 20px;

    transition: all 0.75s ease;
`;

export const Header = styled.h2`
    font-size: 14px;
    font-weight: bold;
`;
