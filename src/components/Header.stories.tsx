import React from 'react';
import { Header } from './Header';

export const Default = () => (
    <Header to='0xdd0ba6a96Aae2A2031536eD255d77459dE937fD2' network='Ethereum Mainnet' url='http://www.google.com' />
);

export const Medium = () => (
    <Header
        to='0xdd0ba6a96Aae2A2031536eD255d77459dE937fD2'
        network='Ethereum Mainnet'
        url='http://www.google.com'
        severity='medium'
    />
);

export const High = () => (
    <Header
        to='0xdd0ba6a96Aae2A2031536eD255d77459dE937fD2'
        network='Ethereum Mainnet'
        url='http://www.google.com'
        severity='high'
    />
);

export const WithURL = () => (
    <Header to='0xdd0ba6a96Aae2A2031536eD255d77459dE937fD2' network='Ethereum Mainnet' url='http://www.google.com' />
);

export const WithoutURL = () => <Header to='0xdd0ba6a96Aae2A2031536eD255d77459dE937fD2' network='Ethereum Mainnet' />;
