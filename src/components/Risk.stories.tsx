import React from 'react';
import { Collapsable } from './UI/Collapsable';
import { Risk } from './Risk';
import { Risk as RiskType } from '../types/api';

const risks: RiskType[] = [
    {
        analyzerName: 'Forta Networks',
        findings: [
            {
                description: 'No Threats Detected by Forta Networks',
            },
            {
                description: 'No Threats Detected by Forta Networks',
            },
            {
                description: 'No Threats Detected by Forta Networks',
            },
            {
                description: 'No Threats Detected by Forta Networks',
            },
        ],
        icon: 'https://blockfence-assets.s3.amazonaws.com/icons/forta.png',
        severity: 'HIGH',
    },
    {
        analyzerName: 'Analyzer Test',
        findings: [
            {
                description: 'No Threats Detected by Forta Networks',
            },
        ],
        icon: 'https://blockfence-assets.s3.amazonaws.com/icons/forta.png',
        severity: 'MEDIUM',
    },
    {
        analyzerName: 'Forta Networks',
        findings: [
            {
                description: 'No Threats Detected by Forta Networks',
            },
        ],
        icon: 'https://blockfence-assets.s3.amazonaws.com/icons/forta.png',
        severity: 'LOW',
    },
];

export const Default = () => {
    return (
        <div style={{ width: '350px' }}>
            <Collapsable title='Spotlight'>
                {risks.map((risk, id) => (
                    <Risk key={id} risk={risk} />
                ))}
            </Collapsable>
        </div>
    );
};
