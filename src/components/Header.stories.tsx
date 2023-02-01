import React from 'react';
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

export const Medium = () => (
    <div style={{ width: '370px' }}>
        <Header
            to='0xdd0ba6a96Aae2A2031536eD255d77459dE937fD2'
            network='Ethereum Mainnet'
            url='http://www.google.com'
            severity='medium'
        />
    </div>
);

export const High = () => (
    <div style={{ width: '370px' }}>
        <Header
            to='0xdd0ba6a96Aae2A2031536eD255d77459dE937fD2'
            network='Ethereum Mainnet'
            url='http://www.google.com'
            severity='high'
        />
    </div>
);

export const WithURL = () => (
    <div style={{ width: '370px' }}>
        <Header
            to='0xdd0ba6a96Aae2A2031536eD255d77459dE937fD2'
            network='Ethereum Mainnet'
            url='http://www.google.com'
        />
    </div>
);

export const WithoutURL = () => (
    <div style={{ width: '370px' }}>
        <Header to='0xdd0ba6a96Aae2A2031536eD255d77459dE937fD2' network='Ethereum Mainnet' />
    </div>
);
