import type { Meta } from '@storybook/react';
import React, { useState } from 'react';
import { Tabs, TabOptions } from './Tabs';

const meta: Meta<typeof Tabs> = {
    component: Tabs,
};

export default meta;

const sampleOptions: TabOptions[] = [
    { key: '1', title: 'Info' },
    { key: '2', title: 'Analysis' },
    { key: '3', title: 'Example' },
];

export const Primary = () => {
    const [selected, setSelected] = useState('1');

    return (
        <div style={{ backgroundColor: '#F0F6FF', padding: '2rem' }}>
            <Tabs options={sampleOptions} selected={selected} onChange={setSelected} />
        </div>
    );
};
