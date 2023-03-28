import React from 'react';
import { DataEnrichment } from '../types/api';
import { Collapsable } from './UI/Collapsable';
import RadarIcon from '../assets/icons/radar-icon.svg';

import * as Styled from './Enrichment.styles';

interface EnrichmentProps {
    dataEnrichment: DataEnrichment;
    defaultState?: boolean;
}

export function Enrichment({ dataEnrichment, defaultState = false }: EnrichmentProps) {
    const logo = dataEnrichment.dapp_logo ? <img src={dataEnrichment.dapp_logo} width='24' /> : <RadarIcon />;

    return (
        <Collapsable title={dataEnrichment.title} icon={logo} defaultState={defaultState}>
            {dataEnrichment.stats.map((stat, id) => (
                <>
                    <Styled.Title key={id}>{stat.name}</Styled.Title>
                    {stat.value}
                </>
            ))}

            {dataEnrichment.link && (
                <Styled.ExtensionsLink href={dataEnrichment.link} target='_blank' rel='noreferrer'>
                    <img src={dataEnrichment.icon} width='24' /> Read more on {dataEnrichment.powered_by}
                </Styled.ExtensionsLink>
            )}
        </Collapsable>
    );
}
