import styled from 'styled-components';
import { mediaWidth } from '../../shared/theme';

export const Page = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 80px 1fr;
    grid-template-areas: 'page-nav' 'page-body';

    height: 100vh;
    width: 100vw;
    background: #51007d;
`;

export const Header = styled.header`
    grid-area: page-nav;
    background: #3a0d57;
    z-index: 1;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;
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
        background: white;
    }
`;

export const Extension = styled.div`
    z-index: 2;
    background: white;

    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 0 0px 1px #a93cff5c, -6.15957px 8.21277px 18.4787px rgb(0 0 0 / 15%);
    /* box-shadow: -6.15957px 8.21277px 18.4787px rgba(0, 0, 0, 0.15); */

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
