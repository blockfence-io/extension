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
                    <img src='https://blockfence-assets.s3.amazonaws.com/icons/forta.png' width='24' />
                </Styled.Icon>
                <Styled.Title>{risk.AnalyzerName}</Styled.Title>
                <Styled.Severity>{risk.Severity}</Styled.Severity>
                <Styled.Action>{visible ? '-' : '+'}</Styled.Action>
            </Styled.Header>
            {visible && (
                <Styled.Body>
                    {risk.Findings.map(({ Description }, id) => (
                        <Styled.Finding key={id}>{Description}</Styled.Finding>
                    ))}
                </Styled.Body>
            )}
        </Styled.Container>
    );
}
