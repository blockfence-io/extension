import styled from 'styled-components';
import { Severity } from '../types/api';
import * as theme from '../shared/theme';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: 'header' 'body' 'footer';
    height: 100vh;
    width: 100vw;
    min-width: 376px;
    min-height: 550px;
`;

interface HeaderProps {
    severity: undefined | Severity;
}

export const Header = styled.header<HeaderProps>`
    grid-area: header;
    display: flex;
    align-items: center;

    color: white;
    background: ${(props) => (props.severity ? theme.riskBackground[props.severity] : theme.riskText.NONE)};
    border-bottom: 1px #ffffff40 solid;

    padding: 8px 10px;
    gap: 6px;
`;

export const Body = styled.div`
    grid-area: body;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`;

export const Footer = styled.footer`
    grid-area: footer;

    padding: 0.5rem 20px;
    display: flex;
    gap: 10px;
    justify-content: space-between;
`;
