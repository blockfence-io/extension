import type { Meta } from '@storybook/react';
import React, { useState } from 'react';
import { Severity } from '../types/api';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
    component: Header,
};

export const Default = () => (
    <div style={{ width: '370px' }}>
        <Header
            to='0xdd0ba6a96Aae2A2031536eD255d77459dE937fD2'
            network='Ethereum Mainnet'
            url='http://www.google.com'
        />
    </div>
);

export const LongURL = () => (
    <div style={{ width: '370px' }}>
        <Header
            to='0xdd0ba6a96Aae2A2031536eD255d77459dE937fD2'
            network='Ethereum Mainnet'
            url='https://github.com/mackbowes/metl-ui/blob/667786f4bf6a6b8c4cb23ca72e18efd526b2a371/utils/web3modal.js'
            isContract={true}
        />
    </div>
);

export const ContractOrEOA = () => {
    const [isContract, setIsContract] = useState(false);

    return (
        <div style={{ width: '370px' }}>
            <Header
                to='0xdd0ba6a96Aae2A2031536eD255d77459dE937fD2'
                network='Ethereum Mainnet'
                url='http://www.google.com'
                severity='LOW'
                isContract={isContract}
            />

            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                <button onClick={() => setIsContract(!isContract)}>Toggle</button>
            </div>
        </div>
    );
};

export const RisksToggle = () => {
    const [severity, setSeverity] = useState<Severity | undefined>('NONE');

    return (
        <div style={{ width: '370px' }}>
            <Header
                to='0xdd0ba6a96Aae2A2031536eD255d77459dE937fD2'
                network='Ethereum Mainnet'
                url='http://www.google.com'
                severity={severity}
                isContract={true}
            />

            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                <button onClick={() => setSeverity(undefined)}>Undef.</button>
                <button onClick={() => setSeverity('NONE')}>NONE</button>
                <button onClick={() => setSeverity('LOW')}>LOW</button>
                <button onClick={() => setSeverity('MEDIUM')}>MEDIUM</button>
                <button onClick={() => setSeverity('HIGH')}>HIGH</button>
                <button onClick={() => setSeverity('CRITICAL')}>CRITICAL</button>
            </div>
        </div>
    );
};

export const WithoutURL = () => (
    <div style={{ width: '370px' }}>
        <Header to='0xdd0ba6a96Aae2A2031536eD255d77459dE937fD2' network='Ethereum Mainnet' severity='NONE' />
    </div>
);

export default meta;
