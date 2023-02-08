import styled from 'styled-components';

export const Container = styled.div`
    display: inline-flex;
    align-items: center;
    position: relative;
    font-size: 0.8rem;
    border: 1px solid rgba(255, 255, 255, 0.4);
    padding: 4px 8px;
    border-radius: 2px;
    user-select: none;

    &:hover {
        background: #bcffbc40;
    }
`;

export const Options = styled.div`
    position: absolute;
    left: 0;
    /* right: 0; */
    top: 0;
    text-align: center;
    border: 1px solid #351253;
    background: white;
    color: black;
    border-radius: 2px;
    z-index: 100;
    overflow: hidden;
    margin-top: 24px;
    margin-left: -1px;
`;

export const Option = styled.div`
    user-select: none;
    padding: 8px 8px;

    &:hover {
        background: #351253;
        color: white;
    }
`;

export const Selected = styled.div``;
