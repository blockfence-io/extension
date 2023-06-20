import React from 'react';
import { Tooltip } from 'react-tooltip';
import * as theme from '../../shared/theme';

import * as Styled from './InfoTooltip.styles';

export interface InfoIconProps {
    name: string;
    tooltipText: string;
}

export const InfoTooltip: React.FC<InfoIconProps> = ({ name, tooltipText }) => {
    const children = <Styled.Content>{tooltipText}</Styled.Content>;

    const id = 'name-' + name;
    return (
        <>
            <Styled.InfoIcon data-tooltip-id={id}>i</Styled.InfoIcon>
            <Tooltip id={id} children={children} />
        </>
    );
};
