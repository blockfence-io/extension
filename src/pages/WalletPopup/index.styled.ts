import styled from 'styled-components';

export const Container = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: top;
    flex-direction: column;
    /* border: 1px solid #050344; */
    height: 100vh;
    width: 100vw;

    overflow-y: auto;
    overflow-x: hidden;

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
    margin-bottom: 0.5rem;
`;

export const Description = styled.p`
    text-align: left;
    font-size: 0.9rem;
    font-weight: 300;
    margin-bottom: 1rem;
`;

export const Subtitle = styled.h3`
    font-size: 0.9rem;
    text-align: left;
    color: #e5eaf7;
    margin: 10px 0px 5px 0px;

    font-weight: 600;
    text-transform: uppercase;
    margin-top: 1.5rem;
`;

export const Label = styled.label`
    font-size: 0.85rem;
    text-align: left;
    color: white;
    text-transform: uppercase;
    margin-bottom: 0.3rem;
`;

export const InputError = styled.div`
    color: #e96f6f;
    font-size: 0.9rem;
    margin-top: 5px;
`;

export const Error = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    font-size: 1rem;
    color: #e96f6f;

    font-size: 1rem;
    padding: 1rem 1rem;
    background: #ffffff30;
    margin-top: 1rem;
    border-radius: 5.2px;
`;

export const SadFace = styled.div`
    font-size: 2rem;
    margin-bottom: 1rem;
`;

export const Reponse = styled.div`
    text-align: left;
    color: #fff9f1;
    font-weight: 300;
    font-size: 0.95rem;
    line-height: 1.4;
`;

export const Form = styled.form`
    display: flex;
    gap: 10px;
`;

export const Footer = styled.div`
    margin-top: 0.5rem;
    display: flex;
    gap: 10px;
    justify-content: space-between;
`;
