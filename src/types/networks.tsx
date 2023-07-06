import React from 'react';
import { DropdownOption } from '../components/UI/Dropdown';

import EthereumIcon from '../assets/icons/ethereum-logo.svg';
import PolygonIcon from '../assets/icons/polygon-logo.svg';
import BSCIcon from '../assets/icons/bsc-logo.svg';
import ArbitrumIcon from '../assets/icons/arbitrum-logo.svg';
import AvalanchIcon from '../assets/icons/avalanche-logo.svg';
import OptimismIcon from '../assets/icons/optimism-logo.svg';

export const networkDropdownOptions: DropdownOption[] = [
    { title: 'Ethereum', key: '1', icon: <EthereumIcon /> },
    { title: 'Ethereum', key: '0x1', icon: <EthereumIcon /> },
    { title: 'Polygon', key: '137', icon: <PolygonIcon /> },
    { title: 'BSC', key: '56', icon: <BSCIcon /> },
    { title: 'Arbitrum', key: '42161', icon: <ArbitrumIcon /> },
    { title: 'Optimism', key: '10', icon: <OptimismIcon /> },
    { title: 'Avalanche', key: '43114', icon: <AvalanchIcon /> },
];

export function keyBy<
    A extends object,
    K extends keyof {
        [P in keyof A as A[P] extends PropertyKey ? P : never]: unknown;
    }
>(array: A[], key: K) {
    return array.reduce(
        (r, x) => ({ ...r, [x[key] as unknown as PropertyKey]: x }),
        {} as { [P in A[K] as A[K] extends PropertyKey ? A[K] : never]: A }
    );
}

export const SupportedNetworks = keyBy(networkDropdownOptions, 'key');
