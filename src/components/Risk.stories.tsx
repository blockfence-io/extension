import React from 'react';
import { Collapsable } from './UI/Collapsable';
import { Risk } from './Risk';
import { Risk as RiskType } from '../types/api';

const risks: RiskType[] = [
    {
        AnalyzerName: 'Forta Networks',
        Findings: [
            {
                Description: 'No Threats Detected by Forta Networks',
            },
            {
                Description: 'No Threats Detected by Forta Networks',
            },
            {
                Description: 'No Threats Detected by Forta Networks',
            },
            {
                Description: 'No Threats Detected by Forta Networks',
            },
        ],
        Icon: 'https://blockfence-assets.s3.amazonaws.com/icons/forta.png',
        Severity: 'NONE',
    },
    {
        AnalyzerName: 'Analyzer Test',
        Findings: [
            {
                Description: 'No Threats Detected by Forta Networks',
            },
        ],
        Icon: 'https://blockfence-assets.s3.amazonaws.com/icons/forta.png',
        Severity: 'NONE',
    },
    {
        AnalyzerName: 'Forta Networks',
        Findings: [
            {
                Description: 'No Threats Detected by Forta Networks',
            },
        ],
        Icon: 'https://blockfence-assets.s3.amazonaws.com/icons/forta.png',
        Severity: 'NONE',
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
