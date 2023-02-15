import styled from 'styled-components';

export const Results = styled.div`
    padding: 20px;
    overflow-y: auto;

    position: relative;
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

export const Banner = styled.div`
    background: rgba(172, 16, 16, 0.52);
    color: #ffffffe3;
    border-radius: 1px;
    /* display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center; */

    display: inline-block;
    position: absolute;
    position: absolute;
    padding: 4px 40px;
    font-weight: 800;

    left: -38px;
    top: 14px;
    transform: rotate(-45deg);

    /* position: fixed;
    top: auto;
    bottom: 16px;
    left: auto;
    right: -37px;
    font-size: 12px; */
`;
