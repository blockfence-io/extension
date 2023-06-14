import styled, { css } from 'styled-components';
import { IconContainer } from './UI/IconContainer';

interface ContainerProps {
    compact?: boolean;
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: row;
    flex: 1;

    font-size: 12px;
    padding: 0px;
    border-radius: 6px;
    gap: 20px;

    transition: all 0.75s ease;
`;

export const Navigation = styled.div``;

export const InfoGroup = styled.div<ContainerProps>`
    display: flex;
    flex-direction: ${(props) => (props.compact ? 'row' : 'column')};
    gap: 10px;
    flex: 1;
`;

export const Info = styled.div<ContainerProps>`
    display: grid;
    grid-template-columns: min-content 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0px 12px;
    grid-auto-flow: row;
    grid-template-areas:
        'Icon Key'
        'Icon Value';

    &:not(:last-child):not(:only-child) {
        ${(props) =>
            props.compact
                ? css`
                      padding-right: 10px;
                      border-right: 1px #d9d9d9 solid;
                  `
                : css`
                      padding-bottom: 10px;
                      border-bottom: 1px #d9d9d9 solid;
                  `}
    }
`;

export const Icon = styled(IconContainer)`
    grid-area: Icon;
`;

export const Key = styled.div<ContainerProps>`
    grid-area: Key;
    color: #777777;
    font-size: 10px;
    font-weight: 500;

    display: flex;
    align-items: center;
`;

export const Value = styled.div<ContainerProps>`
    grid-area: Value;
    font-size: 14px;
    font-weight: 500;

    display: flex;
    align-items: center;
    gap: 4px;
`;

export const TruncatedValue = styled(Value)`
    display: block;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
