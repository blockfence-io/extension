import styled from 'styled-components';
import * as theme from '../shared/theme';

export const Title = styled.div`
    font-weight: bold;
    margin-bottom: 4px;
    margin-top: 8px;
    font-size: 12px;

    &:first-of-type {
        margin-top: 0px;
    }
`;

export const PoweredBy = styled.div`
    color: black;
    font-size: 10px;
    margin-top: 12px;

    display: flex;
    align-items: center;

    & svg {
        margin-right: 6px;
        margin-bottom: 1px;
    }
`;

export const ExtensionsLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 500;
    color: ${theme.linkColor};

    font-size: 12px;
    text-align: center;
    opacity: 0.8;

    & img {
        margin-right: 4px;
    }

    &:hover {
        text-decoration: none;
        opacity: 1;
    }
`;

export const ReadMoreLink = styled.span`
    font-weight: 500;
    color: ${theme.linkColor};

    font-size: 12px;
    cursor: pointer;

    & img {
        margin-right: 4px;
    }

    opacity: 0.8;
    &:hover {
        text-decoration: none;
        opacity: 1;
    }
`;

export const MetricsTable = styled.div`
    margin: 12px 0;
    display: flex;
    font-size: 10px;

    border: 1px #f6f5f8 solid;
    border-radius: 6px;
`;

export const Metric = styled.div`
    flex: 1;
`;

export const MetricTitle = styled.div`
    font-size: 8px;
    font-weight: 500;
    color: #777777;
    background: #f6f5f8;
    padding: 2px 8px;
    // make this container horizontal
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    // make it centered vertically
    align-items: center;
`;

export const MetricValue = styled.div`
    padding: 2px 8px;
    font-weight: 500;
`;

export const InfoIcon = styled.div`
    background: #777777;
    // make the background a circle
    border-radius: 50%;
    width: 10px;
    height: 10px;
    // center the text
    display: flex;
    justify-content: center;
    align-items: center;
    // make the text white
    color: white;
    // make the text a bit transparent
    opacity: 0.8;
    // add a bit of margin to the right
    margin-right: 4px;
    // make the cursor a pointer
    cursor: pointer;
    // add a bit of padding
    padding: 4px;
    // make the font a bit smaller
    font-size: 6px;
`;
