import type { Meta } from '@storybook/react';
import React from 'react';
import { SearchBar } from './SearchBar';
import { Panel } from './New/Layout';

const meta: Meta<typeof SearchBar> = {
    component: SearchBar,
};

export const Default = () => (
    <Panel style={{ width: '390px' }}>
        <SearchBar onAddressClick={(chainId, to) => {}} onURLClick={(url) => {}} />
    </Panel>
);

export default meta;
