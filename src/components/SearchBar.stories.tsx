import type { Meta } from '@storybook/react';
import React from 'react';
import { SearchBar } from './SearchBar';

const meta: Meta<typeof SearchBar> = {
    component: SearchBar,
};

export const Default = () => (
    <div style={{ width: '550px', backgroundColor: 'black', padding: '10px' }}>
        <SearchBar onClick={(chainId, to) => {}} />
    </div>
);

export default meta;
