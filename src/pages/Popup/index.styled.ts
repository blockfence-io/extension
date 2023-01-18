import styled from 'styled-components';

export const Container = styled.div`
    padding: 1rem;
    min-width: 350px;
    min-height: 400px;
    display: flex;
    justify-content: top;
    flex-direction: column;
    /* border: 1px solid #050344; */

    color: white;
    background: rgb(0, 0, 0);
    background: linear-gradient(
        170deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(5, 3, 68, 1) 2%,
        rgba(0, 0, 0, 1) 26%,
        rgba(0, 0, 0, 1) 69%,
        rgba(1, 9, 50, 1) 98%,
        rgba(0, 0, 0, 1) 100%
    );
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
