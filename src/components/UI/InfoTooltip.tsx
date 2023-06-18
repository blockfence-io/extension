import React from 'react';
import { Tooltip } from 'react-tooltip';
import * as theme from '../../shared/theme';

import * as Styled from './InfoTooltip.styles';

export interface InfoIconProps {
    name: string;
    tooltipText: string;
}

export const InfoTooltip: React.FC<InfoIconProps> = ({ name, tooltipText }) => {
    const id = 'name-' + name;
    return (
        <>
            <Styled.InfoIcon data-tooltip-id={id} data-tooltip-content={tooltipText}>
                i
            </Styled.InfoIcon>
            <Tooltip style={{ background: theme.tooltipBG }} id={id} />
        </>
    );
};
