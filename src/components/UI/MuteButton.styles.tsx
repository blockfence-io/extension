import styled from 'styled-components';
import * as theme from '../../shared/theme';

export const Container = styled.div`
    display: flex;
    align-items: center;

    gap: 4px;

    cursor: pointer;
    user-select: none;

    & svg {
        margin-bottom: 2px;
    }

    :hover {
        color: ${theme.primaryColor};
    }
`;
