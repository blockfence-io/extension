import React, { useState } from 'react';
import { Risk as RiskType } from '../types/api';

import * as Styled from './Risk.styles';

interface RiskProps {
    risk: RiskType;
    defaultState?: boolean;
}

export function Risk({ risk, defaultState = false }: RiskProps) {
    const [visible, setVisible] = useState(defaultState);

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
                <Styled.Severity>{risk.severity}</Styled.Severity>
                <Styled.Action>{visible ? '-' : '+'}</Styled.Action>
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
