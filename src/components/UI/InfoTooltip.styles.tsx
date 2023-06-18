import styled, { css } from 'styled-components';

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
