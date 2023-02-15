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
    gap: 22px;
    justify-content: flex-start;
`;

export const Banner = styled.div`
    display: inline-block;
    color: #ffffffe3;
    background: rgba(172, 16, 16, 0.52);
    border-radius: 1px;
    font-weight: 800;
    font-size: 10px;
    padding: 2px 40px;

    position: fixed;
    bottom: 12px;
    right: -40px;
    transform: rotate(-45deg);

    z-index: 20;

    user-select: none;
`;
