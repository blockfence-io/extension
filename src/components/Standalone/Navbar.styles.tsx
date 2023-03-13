import styled from 'styled-components';
import { mediaWidth } from '../../shared/theme';

export const Container = styled.div`
    display: flex;

    align-items: center;
    justify-content: space-between;

    max-width: 1400px;
    width: 80vw;

    /* Mobile */
    @media (max-width: ${mediaWidth.tablet}) {
        width: 90vw;
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    & svg {
        height: 40px;

        /* Mobile */
        @media (max-width: ${mediaWidth.tablet}) {
            width: 28px;
        }
    }
`;

export const Company = styled.div`
    font-size: 30px;
    font-weight: 700;

    /* Mobile */
    @media (max-width: ${mediaWidth.tablet}) {
        font-size: 24px;
    }
`;

export const Navigation = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    & svg {
        fill: white;
        opacity: 1;

        &:hover {
            opacity: 0.8;
        }
    }
`;

export const ExtensionsLink = styled.a`
    color: white;
    background: #8f00ff;
    border-radius: 50px;

    font-size: 16px;
    font-weight: bold;

    padding: 10px 20px;

    display: flex;
    align-items: center;
    gap: 12px;

    &:hover {
        text-decoration: none;
        background: #a93cff;
    }

    & svg {
        height: 30px;

        &:hover {
            opacity: 1;
        }
    }
`;
