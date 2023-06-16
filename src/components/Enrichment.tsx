import React, { useState } from 'react';
import { DataEnrichment } from '../types/api';
import { Collapsable } from './UI/Collapsable';
import RadarIcon from '../assets/icons/radar-icon.svg';

import * as Styled from './Enrichment.styles';

interface EnrichmentProps {
    dataEnrichment: DataEnrichment;
    defaultState?: boolean;
}

export function Enrichment({ dataEnrichment, defaultState = false }: EnrichmentProps) {
    const [readMore, setReadMore] = useState(false);
    const logo = dataEnrichment.dapp_logo ? <img src={dataEnrichment.dapp_logo} width='24' /> : <RadarIcon />;

    return (
        <Collapsable
            title={dataEnrichment.title}
            icon={logo}
            defaultState={defaultState}
            subtitle={dataEnrichment.type}
        >
            {dataEnrichment.description} {readMore && dataEnrichment.long_description}
            {dataEnrichment.long_description && !readMore && (
                <Styled.ReadMoreLink onClick={() => setReadMore(true)}>Read more...</Styled.ReadMoreLink>
            )}
            {dataEnrichment.metrics && (
                <Styled.MetricsTable>
                    {dataEnrichment.metrics?.map((metric) => (
                        <Styled.Metric key={metric.name}>
                            <Styled.MetricTitle>{metric.name}</Styled.MetricTitle>
                            <Styled.MetricValue>{metric.amount}</Styled.MetricValue>
                        </Styled.Metric>
                    ))}
                </Styled.MetricsTable>
            )}
            {dataEnrichment.powered_by_data && (
                <Styled.ExtensionsLink href={dataEnrichment.powered_by_data.link} target='_blank' rel='noreferrer'>
                    <img src={dataEnrichment.powered_by_data.icon} width='24' /> Read more on{' '}
                    {dataEnrichment.powered_by_data.name}
                </Styled.ExtensionsLink>
            )}
        </Collapsable>
    );
}
