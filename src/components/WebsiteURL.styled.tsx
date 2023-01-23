import styled from 'styled-components';

export const Link = styled.a`
    font-weight: 300;
    color: white;
    text-decoration: none;
    opacity: 0.8;
    margin-top: 0.7rem;

    display: flex;
    gap: 6px;

    &:hover {
        /* text-decoration: underline; */
        opacity: 1;
    }

    & svg {
        fill: white;
        width: 14px;
    }
`;
