import styled from 'styled-components';

export const Button = styled.button`
    font-size: 0.8rem;
    width: 25%;
    background-color: transparent;
    padding: 4px 10px;
    color: white;
    /* border: 0px solid white; */
    border: 1px solid rgba(255, 255, 255, 0.3);

    transition: 0.1s;

    &:hover {
        background: #ffffff20;
        border: 1px solid rgba(255, 255, 255, 0.5);
    }

    &:disabled {
        opacity: 0.5;
    }
`;
