import styled from 'styled-components';
import { Panel } from './Panel';

export const Container = styled(Panel)`
    display: flex;
    flex-direction: row;
    padding: 12px 14px;
    gap: 10px;

    align-items: center;
`;

export const Icon = styled.div`
    padding-right: 6px;
    cursor: pointer;
`;

export const Body = styled.div`
    font-weight: 300;
    font-size: 10px;
    font-weight: 500;
    line-height: 18px;
    flex: 1;
`;
