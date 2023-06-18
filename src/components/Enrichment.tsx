import React, { useState } from 'react';
import { DataEnrichment } from '../types/api';
import { Collapsable } from './UI/Collapsable';
import RadarIcon from '../assets/icons/radar-icon.svg';
import { Tooltip } from 'react-tooltip';
import * as theme from '../shared/theme';

import * as Styled from './Enrichment.styles';

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

function InfoTooltip(name: string, text: string) {
    const id = 'name-' + name;
    return (
        <>
            <Styled.InfoIcon data-tooltip-id={id} data-tooltip-content={text}>
                i
            </Styled.InfoIcon>
            <Tooltip style={{ background: theme.tooltipBG }} id={id} />
        </>
    );
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
                                {metric.name} {metric.tooltip && InfoTooltip(metric.name, metric.tooltip)}
                            </Styled.MetricTitle>
                            <Styled.MetricValue>{formatNumber(metric.amount)}</Styled.MetricValue>
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
