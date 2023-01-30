import styled from 'styled-components';

export const Container = styled.div`
    padding: 0;
    min-width: 376px;
    min-height: 400px;
    display: flex;
    justify-content: top;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: 1.4rem;
    font-weight: 400;
    text-align: left;
    color: #bcffbc;
    margin-bottom: 1rem;
`;

export const Description = styled.span`
    font-weight: 300;
`;

export const Label = styled.label`
    font-size: 0.85rem;
    text-align: left;
    color: white;
    text-transform: uppercase;
    margin-bottom: 0.3rem;
`;

export const Form = styled.form`
    display: flex;
    gap: 10px;
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
    margin-top: 0.5rem;
    display: flex;
    gap: 10px;
    justify-content: space-between;
`;
