import styled from 'styled-components';
import { IconContainer } from './IconContainer';
import { Panel as UIPanel } from './Panel';

export const Panel = styled(UIPanel)`
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

export const Multiline = styled.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const Title = styled.div`
    font-weight: bold;
    font-size: 16px;
`;

export const Subtitle = styled.div`
    font-weight: 500;
    color: #777777;
    font-size: 10px;
`;

export const Icon = styled(IconContainer)`
    margin-right: 12px;
`;

export const Body = styled.div`
    margin-top: 12px;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
`;

export const Accessory = styled.div`
    color: #777777;
`;
