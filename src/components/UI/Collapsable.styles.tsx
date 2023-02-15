import styled from 'styled-components';

export const Container = styled.div`
    border: 1px solid #dadce0;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    padding: 8px 14px;
    gap: 10px;

    &:not(:last-child) {
        margin-bottom: 20px;
    }
`;

export const Header = styled.div`
    font-size: 16;
    font-weight: bold;

    display: flex;
    flex-direction: row;
    align-items: center;

    user-select: none;
    cursor: pointer;
`;

export const Title = styled.div`
    flex: 1;
    font-weight: 800;
    font-size: 16px;
    padding: 6px 0;
`;

export const Icon = styled.div`
    padding-right: 6px;
`;

export const Body = styled.div`
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    color: #707070;
`;
