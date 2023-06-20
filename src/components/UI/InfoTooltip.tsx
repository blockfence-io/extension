import React from 'react';
import { Tooltip } from 'react-tooltip';

import * as Styled from './InfoTooltip.styles';

export interface InfoIconProps {
    name: string;
    tooltipText: string;
}

export const InfoTooltip: React.FC<InfoIconProps> = ({ name, tooltipText }) => {
    const id = 'name-' + name;
    return (
        <>
            <Styled.InfoIcon data-tooltip-id={id}>i</Styled.InfoIcon>
            <Tooltip id={id}>
                <Styled.Content>{tooltipText}</Styled.Content>
            </Tooltip>
        </>
    );
};
