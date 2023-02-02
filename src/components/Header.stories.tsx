import React, { useState } from 'react';
import { Severity } from '../types/api';
import { Header } from './Header';

export const Default = () => (
    <div style={{ width: '370px' }}>
        <Header
            to='0xdd0ba6a96Aae2A2031536eD255d77459dE937fD2'
            network='Ethereum Mainnet'
            url='http://www.google.com'
        />
    </div>
);

export const RisksToggle = () => {
    const [severity, setSeverity] = useState<Severity | undefined>('NONE');

    return (
        <div style={{ width: '370px' }}>
            <Header
                to='0xdd0ba6a96Aae2A2031536eD255d77459dE937fD2'
                network='Ethereum Mainnet'
                url='http://www.google.com'
                severity={severity}
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
