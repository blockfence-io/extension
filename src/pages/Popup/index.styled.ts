import styled from 'styled-components';

export const Container = styled.div`
    padding: 0;
    width: 376px;
    min-height: 400px;
    display: flex;
    justify-content: top;
    flex-direction: column;
`;

export const Help = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-size: 1rem;
    width: 60%;
    align-self: center;
    font-weight: 300;
    opacity: 0.7;
    user-select: none;
`;

export const Footer = styled.div`
    margin: 0.5rem 20px;
    display: flex;
    gap: 10px;
    justify-content: space-between;
`;
