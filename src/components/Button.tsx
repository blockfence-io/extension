import styled from 'styled-components';

export const Button = styled.button`
    font-size: 0.8rem;
    width: 25%;
    background-color: #e5eaf7;
    color: #28499b;
    padding: 4px 4px;
    border: 1px solid #28499b;
    border-radius: 4px;

    &:disabled {
        opacity: 0.5;
    }
`;
