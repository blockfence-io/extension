import React, { useState } from 'react';
import type { Meta } from '@storybook/react';
import { Panel } from './UI/Panel';

import { Simulation } from './Simulation';
import { TransactionSimulation } from '../types/api';

const meta: Meta<typeof Simulation> = {
    component: Simulation,
};

const fakeData: TransactionSimulation = {
    outgoing_transaction: undefined,
    incoming_transaction: undefined,
    gas_used: 0.0001,
    gas_symbol: '$',
    gas_usd: 0.123,
};

export const Primary = () => {
    return (
        <Panel style={{ width: '390px' }}>
            <Simulation simulation={fakeData} />
        </Panel>
    );
};

export default meta;
