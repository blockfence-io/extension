import styled from 'styled-components';

export const Container = styled.div`
    border: 1px solid #dadce0;
    border-radius: 5px;

    display: flex;
    flex-direction: row;
    padding: 8px 14px;
    gap: 10px;

    &:not(:last-child) {
        margin-bottom: 20px;
    }

    align-items: center;
`;

export const Icon = styled.div`
    padding-right: 6px;
    cursor: pointer;
`;

export const Body = styled.div`
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    color: #707070;
    flex: 1;
`;
