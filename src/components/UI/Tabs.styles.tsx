import styled from 'styled-components';
import * as theme from '../../shared/theme';

export const Container = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 10px;

    padding: 5px;
    border-radius: 50px;
    background: white;
`;

interface OptionProps {
    selected: boolean;
}

export const Option = styled.button<OptionProps>`
    background: inherit;
    border: none;
    outline: none;
    font-size: 12px;
    font-weight: 500;
    padding: 8px 22px;
    color: ${(props) => (props.selected ? 'white' : theme.primaryColor)};
    background-color: ${(props) => (props.selected ? theme.primaryColor : 'white')};
    border-radius: 50px;

    transition: all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);

    &:hover {
        background-color: ${(props) => (props.selected ? theme.primaryColor : `${theme.primaryColor}20`)};
    }

    &:focus {
        outline: 1px ${theme.primaryColor}20 solid;
    }

    cursor: pointer;
`;
