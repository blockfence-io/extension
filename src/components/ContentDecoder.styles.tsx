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

export const Options = styled.div`
    border-radius: 5px;

    display: flex;
    flex-direction: column;

    gap: 10px;

    &:not(:last-child) {
        margin-bottom: 20px;
    }
`;

export const Reponse = styled.div`
    text-align: left;
    font-weight: 300;
    font-size: 0.95rem;
    line-height: 1.4;
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

export const Tab = styled.div`
    &:not(:last-child) {
        margin-bottom: 20px;
    }
`;
