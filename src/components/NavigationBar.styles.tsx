import styled from 'styled-components';

export const Container = styled.div`
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

export const InfoGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
`;

export const Info = styled.div`
    display: grid;
    grid-template-columns: min-content 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0px 12px;
    grid-auto-flow: row;
    grid-template-areas:
        'Icon Key'
        'Icon Value';

    &:not(:last-child):not(:only-child) {
        padding-bottom: 10px;
        border-bottom: 1px #d9d9d9 solid;
    }
`;

export interface IconProps {
    type: 'normal' | 'url' | 'address';
}

const iconColors = {
    normal: '#efefef',
    url: '#F2F9FF',
    address: '#FFF1F9',
};

export const Icon = styled.div<IconProps>`
    grid-area: Icon;
    background: ${(props) => iconColors[props.type]};
    border-radius: 10px;
    height: 44px;
    width: 44px;

    display: flex;
    align-items: center;
    justify-content: center;

    & svg {
        width: 28px;
    }
`;

export const Key = styled.div`
    grid-area: Key;
    color: #777777;
    font-size: 10px;
    font-weight: 500;

    display: flex;
    align-items: center;
`;

export const Value = styled.div`
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
