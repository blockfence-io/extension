import styled from 'styled-components';

export const Button = styled.button`
    font-weight: bold;
    font-size: 16px;
    color: white;
    background-color: #3a0da3;
    border: 2px solid #3a0da3;

    padding: 14px 22px;
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    transition: 0.1s;

    &:hover:enabled {
        background: #3a0da320;
        color: #3a0da3;
    }

    &:disabled {
        opacity: 0.5;
    }
`;
