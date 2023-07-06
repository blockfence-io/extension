import type { Meta } from '@storybook/react';
import React, { useState } from 'react';
import { Dropdown, DropdownOption } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
    component: Dropdown,
    argTypes: {
        title: { control: { type: 'string' } },
    },
};

import EthereumIcon from '../../assets/icons/ethereum-logo.svg';
import PolygonIcon from '../../assets/icons/polygon-logo.svg';
import BSCIcon from '../../assets/icons/bsc-logo.svg';
import ArbitrumIcon from '../../assets/icons/arbitrum-logo.svg';
import AvalanchIcon from '../../assets/icons/avalanche-logo.svg';
import OptimismIcon from '../../assets/icons/optimism-logo.svg';

const OPTIONS: DropdownOption[] = [
    { title: 'Ethereum', key: '1', icon: <EthereumIcon /> },
    { title: 'Polygon', key: '137', icon: <PolygonIcon /> },
    { title: 'BSC', key: '56', icon: <BSCIcon /> },
    { title: 'Arbitrum', key: '42161', icon: <ArbitrumIcon /> },
    { title: 'Optimism', key: '10', icon: <OptimismIcon /> },
    { title: 'Avalanche', key: '43114', icon: <AvalanchIcon /> },
];

export const Primary = () => {
    const [selected, setSelected] = useState<string | undefined>('1');

    return (
        <Dropdown
            title='Network'
            value={selected}
            onChange={(newStatus) => {
                setSelected(newStatus);
            }}
            options={OPTIONS}
        />
    );
};

export const Placeholder = () => {
    const [selected, setSelected] = useState<string | undefined>(undefined);

    return (
        <Dropdown
            title='Network'
            placeholder='Choose network'
            value={selected}
            onChange={(newStatus) => {
                setSelected(newStatus);
            }}
            options={OPTIONS}
        />
    );
};

export default meta;
