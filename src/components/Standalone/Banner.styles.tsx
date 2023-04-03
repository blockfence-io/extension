import styled from 'styled-components';
import { mediaWidth } from '../../shared/theme';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    position: relative;

    margin-right: 1vw;
    bottom: 10%;

    @media (max-width: ${mediaWidth.smallLaptop}) {
        bottom: initial;
    }

    /* Blob Style */
    & svg:first-child {
        position: absolute;
        top: -22%;
        left: -12%;
        opacity: 0.4;
    }

    /* Arrow */
    & svg:last-child {
        z-index: 1;
        margin-left: 6rem;
        margin-top: 2rem;

        @media (max-width: ${mediaWidth.smallLaptop}) {
            display: none;
        }
    }

    /* Tablet */
    @media (max-width: ${mediaWidth.smallLaptop}) {
        padding-bottom: 1rem;
    }

    /* Mobile */
    @media (max-width: ${mediaWidth.tablet}) {
        background: #3a0e57;
        width: 100%;
        padding-bottom: 1rem;
        text-align: center;

        /* Blob Style */
        & svg:first-child {
            display: none;
        }
    }
`;

export const Title = styled.div`
    color: white;
    font-weight: 800;
    font-size: 44px;
    margin-bottom: 10px;
    z-index: 1;

    @media (max-width: ${mediaWidth.tablet}) {
        font-size: 18px;
        font-weight: 600;
    }
`;

export const Subtitle = styled.div`
    color: white;
    /* font-weight: 800; */
    font-size: 44px;
    z-index: 1;

    @media (max-width: ${mediaWidth.tablet}) {
        font-size: 18px;
        font-weight: 300;
    }
`;
