import styled from 'styled-components';

export const Button = styled.button`
    font-size: 0.8rem;
    width: 25%;
    background-color: transparent;
    padding: 4px 4px;
    color: white;
    border: 1px solid white;

    transition: 0.2s;

    &:disabled {
        opacity: 0.5;
    }
`;
