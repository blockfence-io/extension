import React, { useState } from 'react';
import { DataEnrichment } from '../types/api';
import { Collapsable } from './UI/Collapsable';
import RadarIcon from '../assets/icons/radar-icon.svg';

import * as Styled from './Enrichment.styles';
import { InfoTooltip } from './UI/InfoTooltip';

interface EnrichmentProps {
    dataEnrichment: DataEnrichment;
    defaultState?: boolean;
}

function cleanupDescription(s: string | undefined): string {
    if (!s) {
        return '';
    }
    return s.replace('<p>', '').replace('</p>', '');
}

function formatNumber(num: number): string {
    if (Math.abs(num) >= 1.0e9) {
        return Math.round(num / 1.0e8) / 10 + 'B';
    }
    if (Math.abs(num) >= 1.0e6) {
        return Math.round(num / 1.0e5) / 10 + 'M';
    }
    if (Math.abs(num) >= 1.0e3) {
        return Math.round(num / 1.0e2) / 10 + 'k';
    }
    return num.toString();
}

export function Enrichment({ dataEnrichment, defaultState = false }: EnrichmentProps) {
    const [readMore, setReadMore] = useState(false);
    const logo = dataEnrichment.dapp_logo ? <img src={dataEnrichment.dapp_logo} width='36' /> : <RadarIcon />;
    return (
        <Collapsable
            title={dataEnrichment.title}
            icon={logo}
            defaultState={defaultState}
            subtitle={dataEnrichment.type}
            iconType={'transparant'}
        >
            {cleanupDescription(dataEnrichment.description)}
            {readMore && cleanupDescription(dataEnrichment.long_description)}
            {dataEnrichment.long_description && !readMore && (
                <Styled.ReadMoreLink onClick={() => setReadMore(true)}>Read more...</Styled.ReadMoreLink>
            )}
            {dataEnrichment.metrics && (
                <Styled.MetricsTable>
                    {dataEnrichment.metrics?.map((metric) => (
                        <Styled.Metric key={metric.name}>
                            <Styled.MetricTitle>
                                {metric.name}{' '}
                                {metric.tooltip && <InfoTooltip name={metric.name} tooltipText={metric.tooltip} />}
                            </Styled.MetricTitle>
                            <Styled.MetricValue>{formatNumber(metric.amount)}</Styled.MetricValue>
                        </Styled.Metric>
                    ))}
                </Styled.MetricsTable>
            )}
            {dataEnrichment.powered_by_data?.link && dataEnrichment.powered_by_data?.name && (
                <Styled.ExtensionsLink href={dataEnrichment.powered_by_data.link} target='_blank' rel='noreferrer'>
                    <img src={dataEnrichment.powered_by_data.icon} width='24' /> Read more on{' '}
                    {dataEnrichment.powered_by_data.name}
                </Styled.ExtensionsLink>
            )}
        </Collapsable>
    );
}
