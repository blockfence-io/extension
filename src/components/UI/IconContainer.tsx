import styled from 'styled-components';

export type IconType = 'normal' | 'url' | 'address' | 'transparant' | 'contract' | 'partners';

export interface IconProps {
    type: IconType;
}

const iconColors = {
    normal: '#efefef',
    url: '#F2F9FF',
    address: '#FF7CCB1A',
    transparant: 'transparent',
    contract: '#FFF5F5',
    partners: '#F4F1FF',
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
