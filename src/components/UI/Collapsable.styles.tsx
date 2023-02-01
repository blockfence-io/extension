import styled from 'styled-components';

export const Container = styled.div`
    border: 1px solid #dadce0;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    padding: 14px;
    gap: 16px;
`;

export const Header = styled.div`
    font-size: 16;
    font-weight: bold;

    display: flex;
    flex-direction: row;

    user-select: none;
    cursor: pointer;
`;

export const Title = styled.div`
    flex: 1;
`;

export const Icon = styled.div``;

export const Body = styled.div`
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    color: #707070;
`;
