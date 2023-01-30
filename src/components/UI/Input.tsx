import styled from 'styled-components';

export const Input = styled.input`
    padding: 6px 6px;
    color: white;

    border: none;
    background: none;

    border-bottom: 1px solid #ffffff80;
    transition: 0.2s;

    &::placeholder {
        color: #ffffffc2;
    }

    &:focus {
        border-bottom: 1px solid #ffffff;
        outline: none;
        background: #ffffff1a;
    }
`;
