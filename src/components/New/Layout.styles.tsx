import styled, { css } from 'styled-components';

import BackgroundChipImage from '../../assets/background_chip_centered.png';

import * as types from '../../types/api';
import * as theme from '../../shared/theme';

interface BackgroundProps {
    severity: types.Severity | undefined;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const Header = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: space-between;
`;

export const Background = styled.div<BackgroundProps>`
    position: relative;
    display: flex;
    flex-direction: column;

    /* background-color: ${theme.primaryColor}; */
    background: ${(props) => (props.severity ? theme.riskBackground[props.severity] : theme.primaryColor)};

    /* TODO: Might be removable */
    & > div {
        position: relative;
    }

    /* Image background trick to set opacity to 0.4 */
    ${(props) =>
        props.severity === undefined &&
        css`
            &:before {
                content: ' ';
                opacity: 0.4;
                z-index: 0;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                display: block;
                position: absolute;
                background-image: url(${BackgroundChipImage});

                background-position: top center;
                background-repeat: no-repeat;
                background-size: 145%;
            }
        `}

    /* Computer SVG Image */
    & svg#computer {
        align-self: center;
        height: 280px;
        position: relative;
    }
`;

export const Panel = styled.div`
    min-height: 100px;

    background: #ffffff;
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.05);
    border-radius: 16px;

    padding: 20px;

    position: relative;
    z-index: 10;
`;

export const PanelHeader = styled.div<BackgroundProps>`
    color: ${(props) => (props.severity ? theme.riskText[props.severity] : theme.primaryColor)};
    font-weight: bold;
    background: white;
    padding: 8px;
    align-self: center;
    text-align: center;
    text-transform: uppercase;
    font-size: 12px;

    /* Hard coded designer shape */
    width: 140px;
    clip-path: path(
        'M17.0313 4.453C18.886 1.67101 22.0083 0 25.3518 0H114.648C117.992 0 121.114 1.67101 122.969 4.453L140 32H0L17.0313 4.453Z'
    );
`;

export const Body = styled.div`
    flex: 1;
    padding: 25px;
`;

export const Footer = styled.div`
    padding: 25px;
`;

// 50/50 Height recolor trick
export const PanelBackground = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 25px;

    /* background: linear-gradient(to bottom, #3a0da3 50%, rgba(255, 0, 0, 0) 50%); */
    background: linear-gradient(to top, #f0f6ff 50%, rgba(255, 0, 0, 0) 50%);
`;
