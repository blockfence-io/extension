import styled from 'styled-components';

export const Container = styled.div`
    display: inline-block;
    position: relative;
    font-size: 0.8rem;
    border: 1px solid rgba(255, 255, 255, 0.8);
    padding: 4px 8px;
    border-radius: 6px;
    user-select: none;

    &:hover {
        background: #bcffbc47;
    }
`;

export const Options = styled.div`
    position: absolute;
    left: 0;
    /* right: 0; */
    top: auto;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.8);
    background: white;
    color: black;
    border-radius: 6px;
    z-index: 100;
    overflow: hidden;
    margin-top: 6px;
`;

export const Option = styled.div`
    user-select: none;
    padding: 4px 8px;

    &:hover {
        background: #bcffbc;
    }
`;

export const Selected = styled.div``;
