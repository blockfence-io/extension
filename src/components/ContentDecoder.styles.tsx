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

export const Reponse = styled.div`
    text-align: left;
    font-weight: 300;
    font-size: 0.95rem;
    line-height: 1.4;
`;

export const ContractName = styled.div`
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 12px;
`;

export const Copyrights = styled.div`
    color: black;
    font-size: 10px;
    margin-top: 14px;

    & svg {
        vertical-align: top;
        margin-right: 5px;
    }
`;
