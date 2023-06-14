import React, { useState } from 'react';
import type { Meta } from '@storybook/react';
import { Panel } from './UI/Panel';
import { Layout } from './Layout';

import { Simulation } from './Simulation';
import { TransactionSimulation } from '../types/api';

const meta: Meta<typeof Simulation> = {
    component: Simulation,
};

const fakeData: TransactionSimulation = {
    outgoing_transaction: {
        from: '0x6859046255eaef4cc0a1369d504ed804b663afd0',
        to: '0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad',
        amount: 0.000012,
        name: 'Ethereum',
        symbol: 'ETH',
        logo: 'https://static.alchemyapi.io/images/network-assets/eth.png',
        usd: 0.02095308,
    },
    incoming_transaction: {
        from: '0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640',
        to: '0x6859046255eaef4cc0a1369d504ed804b663afd0',
        amount: 0.020943,
        name: 'USD Coin',
        symbol: 'USDC',
        logo: 'https://static.alchemyapi.io/images/assets/3408.png',
        usd: 0.020943,
    },
    outgoing_gas: {
        from: '',
        to: '',
        amount: 138020,
        name: '',
        symbol: 'GWEI',
        logo: 'https://static.alchemyapi.io/images/network-assets/eth.png',
        usd: 4.500102780328754,
    },
};

const fakeDataMissing: TransactionSimulation = {
    outgoing_transaction: {
        amount: 0.000012,
        name: 'Ethereum',
        symbol: 'IDK',
    },
    incoming_transaction: {
        amount: 0.020943,
        name: 'USD Coin',
        symbol: 'USDC',
        usd: 0.020943,
        logo: 'https://static.alchemyapi.io/images/assets/3408.png',
    },
};

export const Primary = () => {
    return (
        <div style={{ width: '378px', height: '600px' }}>
            <Layout panel={<Simulation simulation={fakeData} />} fullpageMode severity='MEDIUM' />
        </div>
    );
};

export const MissingFields = () => {
    return (
        <div style={{ width: '378px', height: '600px' }}>
            <Layout panel={<Simulation simulation={fakeDataMissing} />} fullpageMode severity='MEDIUM' />
        </div>
    );
};

export default meta;
