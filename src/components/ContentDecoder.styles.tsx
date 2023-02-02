import styled from 'styled-components';

export const Results = styled.div`
    padding: 20px;
    overflow-y: auto;
`;

export const Subtitle = styled.h3`
    font-size: 0.9rem;
    text-align: left;
    margin: 10px 0px 5px 0px;

    font-weight: 600;
    text-transform: uppercase;
    margin-top: 1.5rem;
`;

export const LoadingContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
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
    font-weight: 300;
    font-size: 0.95rem;
    line-height: 1.4;
`;

export const ContractName = styled.div`
    font-weight: bold;
`;
