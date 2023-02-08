import React, { useState } from 'react';
import { Risk as RiskType } from '../types/api';
import { UilPlus, UilMinus } from '@iconscout/react-unicons';
import { riskIcons } from '../shared/theme';

import * as Styled from './Risk.styles';

interface RiskProps {
    risk: RiskType;
    defaultState?: boolean;
}

export function Risk({ risk, defaultState = false }: RiskProps) {
    const [visible, setVisible] = useState(defaultState);
    const SeverityIcon = risk && risk.severity ? riskIcons[risk.severity] : undefined;

    function toggle() {
        setVisible(!visible);
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
                {visible ? <UilMinus size='15' /> : <UilPlus size='15' />}
            </Styled.Header>
            {visible && (
                <Styled.Body>
                    {risk.findings.map(({ description }, id) => (
                        <Styled.Finding key={id}>{description}</Styled.Finding>
                    ))}
                </Styled.Body>
            )}
        </Styled.Container>
    );
}
