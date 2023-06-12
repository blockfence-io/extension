import React, { useState } from 'react';
import { Risk as RiskType } from '../types/api';
import { UilAngleDown, UilAngleUp } from '@iconscout/react-unicons';
import { riskIcons } from '../shared/theme';
import { useCollapse } from 'react-collapsed';

import * as Styled from './Risk.styles';

interface RiskProps {
    risk: RiskType;
    defaultState?: boolean;
}

export { RiskGroup } from './Risk.styles';

export function Risk({ risk, defaultState = false }: RiskProps) {
    const [isExpanded, setExpanded] = useState(defaultState);
    const { getCollapseProps } = useCollapse({ isExpanded });
    const SeverityIcon = risk && risk.severity ? riskIcons[risk.severity] : undefined;

    function toggle() {
        setExpanded(!isExpanded);
    }

    return (
        <Styled.Container>
            <Styled.Header onClick={toggle}>
                <Styled.Icon>
                    <img src={risk.icon} width='24' />
                </Styled.Icon>
                <Styled.Title>{risk.analyzerName}</Styled.Title>
                <Styled.Severity severity={risk.severity}>
                    {SeverityIcon && <SeverityIcon size='16' />}
                    <Styled.SeverityName>{risk.severity ? risk.severity : 'NO RISKS FOUND'}</Styled.SeverityName>
                </Styled.Severity>
                {isExpanded ? <UilAngleUp size='15' /> : <UilAngleDown size='16' />}
            </Styled.Header>

            <Styled.Body {...getCollapseProps()}>
                {risk.findings.map(({ description }, id) => (
                    <Styled.Finding key={id}>{description}</Styled.Finding>
                ))}
            </Styled.Body>
        </Styled.Container>
    );
}
