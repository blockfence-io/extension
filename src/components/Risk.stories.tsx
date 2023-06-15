import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Collapsable } from './UI/Collapsable';
import { RiskGroup, Risk } from './Risk';
import { Risk as RiskType } from '../types/api';

const meta: Meta<typeof Risk> = {
    component: Risk,
};

export default meta;
type Story = StoryObj<typeof Risk>;

const risks: RiskType[] = [
    {
        analyzerName: 'An analyzer with a really long name',
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

export const Primary = () => {
    return (
        <div style={{ width: '350px' }}>
            <Collapsable title='Spotlight' defaultState={true}>
                <RiskGroup>
                    {risks.map((risk, id) => (
                        <Risk key={id} risk={risk} />
                    ))}
                </RiskGroup>
            </Collapsable>
        </div>
    );
};
