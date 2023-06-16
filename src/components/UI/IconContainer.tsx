import styled from 'styled-components';

export interface IconProps {
    type: 'normal' | 'url' | 'address';
}

const iconColors = {
    normal: '#efefef',
    url: '#F2F9FF',
    address: '#FFF1F9',
};

export const IconContainer = styled.div<IconProps>`
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