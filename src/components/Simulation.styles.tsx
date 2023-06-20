import styled from 'styled-components';
import * as theme from '../shared/theme';

export const Palette = {
    Red: '#FF3F3F',
    Green: '#00B341',
    Blue: '#006bff',
};

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 6px;
    align-items: stretch;
    gap: 8px;
`;

export const Divider = styled.div`
    display: flex;
    justify-content: center;
    & svg {
        height: 30px;
        z-index: 30;
        border-left: 10px white solid;
        border-right: 10px white solid;
    }

    position: relative;
    &:before {
        position: absolute;
        content: ' ';
        left: 0;
        right: 0;
        z-index: 20;
        top: 15px;
        border-bottom: 1px ${theme.dividerBorderColer} solid;
    }
`;

export const SectionContainer = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    gap: 8px;
`;

export const Direction = styled.div`
    font-weight: 800;
    text-transform: uppercase;
    color: #8e8e8e;
    font-size: 12px;
`;

export const Symbol = styled.div`
    flex: 2;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;

    font-size: 14px;
    font-weight: bold;
    color: black;
`;

export const Logo = styled.div`
    height: 20px;
    width: 20px;
`;

export const Amount = styled.div`
    flex: 1;
    font-size: 14px;
    font-weight: 500;
    text-align: right;
    color: #777777;
`;

export const Hint = styled.div`
    font-size: 11px;
    font-weight: 500;
    color: #777777;
`;

export const EstimatedValue = styled.div`
    text-align: right;
    flex: 1;
    font-size: 14px;
    font-weight: 500;
`;

interface FakeIconProps {
    color: keyof typeof Palette;
}

export const FakeIcon = styled.div<FakeIconProps>`
    border-radius: 50%;
    background: ${(props) => Palette[props.color]};
    width: 16px;
    line-height: 16px;
    text-align: center;
    font-size: 18px;
    color: white;
    user-select: none;
`;

export const Total = styled.div`
    margin-top: 4px;
    background-color: #f4f7fd;
    border-radius: 8px;
    padding: 12px;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
`;

export const TotalValue = styled.span`
    font-weight: bold;
`;

export const tooltipStyle = {
    background: theme.tooltipBG,
    zIndex: 100,
};
