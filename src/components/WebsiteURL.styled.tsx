import styled from 'styled-components';
import * as theme from '../shared/theme';

export const Link = styled.a`
    display: flex;
    align-items: center;
    gap: 6px;

    & svg {
        fill: black;
        width: 14px;
    }

    opacity: 1;

    &:hover {
        opacity: 0.8;
        text-decoration: none;
        color: ${theme.primaryColor};

        & svg {
            fill: ${theme.primaryColor};
        }
    }
`;
