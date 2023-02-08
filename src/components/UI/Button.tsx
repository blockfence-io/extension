import styled from 'styled-components';

export const Button = styled.button`
    font-size: 0.8rem;
    width: 25%;
    background-color: transparent;
    padding: 4px 10px;
    color: white;
    border: 0px solid white;

    transition: 0.2s;

    &:hover {
        background: #ffffff20;
    }

    &:disabled {
        opacity: 0.5;
    }
`;
