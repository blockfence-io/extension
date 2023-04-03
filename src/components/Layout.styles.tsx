import styled, { css } from 'styled-components';
import { Severity } from '../types/api';
import * as theme from '../shared/theme';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr auto;
    grid-template-areas: 'huge-logo' 'header' 'body' 'footer';
    height: 100vh;
    width: 100vw;
    min-width: 376px;
    min-height: 550px;
`;

interface HeaderProps {
    severity: undefined | Severity;
    compact?: boolean;
}

export const Header = styled.header<HeaderProps>`
    grid-area: header;
    display: flex;
    align-items: center;

    color: white;
    background: ${(props) => (props.severity ? theme.riskBackground[props.severity] : theme.riskText.NONE)};

    ${(props) =>
        props.compact &&
        css`
            border-bottom: 1px #ffffff40 solid;
        `}
    padding: 0 6px;
    gap: 2px;
`;

export const Body = styled.div`
    grid-area: body;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    background: white;
`;

export const Footer = styled.footer`
    grid-area: footer;

    padding: 6px 20px;
    display: flex;
    gap: 22px;
    justify-content: flex-start;
`;

export const FloatingSettings = styled.footer`
    position: absolute;
    right: 10px;
    top: 10px;
`;

interface LogoProps {
    hidden: boolean;
}

export const Logo = styled.div<LogoProps>`
    grid-area: huge-logo;
    /* height: 160px; */
    height: ${(props) => (props.hidden ? '0px' : '160px')};

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${theme.primaryColor};
    gap: 20px;

    transition: all 0.5s ease;

    overflow: hidden;

    /* Logo */
    & div {
        font-size: 30px;
        font-weight: 700;
        color: white;

        opacity: ${(props) => (props.hidden ? '0' : '1')};
        transition: all 0.5s ease;
    }

    /* Icon */
    & svg {
        opacity: ${(props) => (props.hidden ? '0' : '1')};
        transition: all 0.5s ease;

        width: 50px;
    }
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

export const Beta = styled.div`
    /* color: #ffffffe3;
    background: rgba(172, 16, 16, 0.52); */
    /* background: #ff000033; */
    color: rgba(172, 16, 16, 0.52);
    padding: 4px 10px;
    font-size: 10px;
    display: flex;
    align-items: center;
    margin: 2px 0;
    font-weight: 800;
`;
