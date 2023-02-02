import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: 'header' 'body' 'footer';
    height: 100vh;
    width: 100vw;
    min-width: 376px;
    min-height: 400px;
    height: 550px;
`;

export const Header = styled.header`
    grid-area: header;
    display: flex;
    justify-content: top;
    flex-direction: column;
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

export const Help = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-size: 1rem;
    width: 60%;
    align-self: center;
    font-weight: 300;
    opacity: 0.7;
    user-select: none;
`;
