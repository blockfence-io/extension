import React from 'react';
import { DataEnrichment, Risk as RiskType } from '../types/api';
import { Collapsable } from './UI/Collapsable';
import RadarIcon from '../assets/icons/radar-icon.svg';

import * as Styled from './Enrichment.styles';

interface EnrichmentProps {
    dataEnrichment: DataEnrichment;
    defaultState?: boolean;
}

export function Enrichment({ dataEnrichment, defaultState = false }: EnrichmentProps) {
    return (
        <Collapsable title={dataEnrichment.title} icon={<RadarIcon />} defaultState={defaultState}>
            {dataEnrichment.stats.map((stat, id) => (
                <>
                    <Styled.Title key={id}>{stat.name}</Styled.Title>
                    {stat.value}
                </>
            ))}
            <>
                {dataEnrichment.powered_by && (
                    <Styled.Copyrights>
                        <img src={dataEnrichment.icon} width='24' />
                        {dataEnrichment.powered_by}
                    </Styled.Copyrights>
                )}
            </>
        </Collapsable>
    );
}
