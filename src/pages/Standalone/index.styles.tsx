import styled from 'styled-components';
import { mediaWidth } from '../../shared/theme';

export const Page = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 80px 1fr;
    grid-template-areas: 'page-nav' 'page-body';

    /* Mobile */
    @media (max-width: ${mediaWidth.tablet}) {
        grid-template-rows: 1fr;
        grid-template-areas: 'page-body';
    }

    height: 100vh;
    width: 100vw;
    background: linear-gradient(180deg, #3e0c5f, black);
`;

export const Header = styled.header`
    grid-area: page-nav;
    z-index: 1;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;

    /* Mobile */
    @media (max-width: ${mediaWidth.tablet}) {
        display: none;
    }
`;

export const Body = styled.div`
    grid-area: page-body;
    justify-self: center;

    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 1;

    width: 1400px;

    @media (max-width: ${mediaWidth.largeDisplay}) {
        width: 1000px;
    }

    /* Mobile */
    @media (max-width: ${mediaWidth.smallLaptop}) {
        width: inherit;
        flex-direction: column;
    }

    /* Mobile */
    @media (max-width: ${mediaWidth.tablet}) {
        width: inherit;
        align-items: flex-start;
        flex-direction: column;
        background: white;
    }
`;

export const Background = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: 0;

    overflow: hidden;
    & svg {
        position: absolute;
        right: 0;
        margin-right: -100px;
        top: 100px;
        opacity: 0.4;
    }
`;

export const LayoutContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr auto;
    grid-template-areas: 'huge-logo' 'header' 'body' 'footer';

    width: 400px;
    min-height: 600px;
    max-height: 800px;
    height: 70vh;

    /* Mobile */
    @media (max-width: ${mediaWidth.tablet}) {
        width: 100vw;
        min-height: 400px;
        max-height: initial;
        height: initial;
    }
`;

export const Extension = styled.div`
    z-index: 2;

    border-radius: 10px;
    overflow: hidden;
    box-shadow: rgb(0 0 0 / 30%) 8px 8px 20px;

    /* Mobile */
    @media (max-width: ${mediaWidth.tablet}) {
        box-shadow: none;
        border-radius: 0;
        flex: 1;
    }
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
