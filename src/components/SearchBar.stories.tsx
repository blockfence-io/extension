import React, { useState } from 'react';
import type { Meta } from '@storybook/react';
import { Panel } from './Layout';

import { SearchBar, SearchState, SearchMode } from './SearchBar';

const meta: Meta<typeof SearchBar> = {
    component: SearchBar,
};

export const Default = () => {
    const [searchInput, setSearchInput] = useState<SearchState>({
        mode: SearchMode.Address,
        chainId: '',
        url: '',
        address: '',
    });
    function handleChange(state) {
        console.log(state);
    }

    return (
        <Panel style={{ width: '390px' }}>
            <SearchBar onChange={setSearchInput} state={searchInput} />
        </Panel>
    );
};

export default meta;
