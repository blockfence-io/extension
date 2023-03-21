import styled from 'styled-components';
import * as theme from '../shared/theme';

export const Title = styled.div`
    font-weight: bold;
    margin-bottom: 6px;
    margin-top: 6px;
    font-size: 12px;
`;

export const PoweredBy = styled.div`
    color: ${theme.riskText.NONE};
    font-size: 16px;
    margin-top: 4px;
    font-weight: bold;
    align-items: center;
    display: flex;
    text-align: center;
    justify-content: center;

    & svg {
        vertical-align: top;
        margin-right: 5px;
    }
`;

export const ExtensionsLink = styled.a`
    padding: 5px

    display: flex;

    &:hover {
        text-decoration: none;
        background: #a93cff;
    }
`;
