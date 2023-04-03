import React, { useState } from 'react';
import * as Styled from './NetworkSelector.styles';

import EthereumIcon from '../assets/icons/ethereum-logo.svg';
import PolygonIcon from '../assets/icons/polygon-logo.svg';
import BSCIcon from '../assets/icons/bsc-logo.svg';
import ArbitrumIcon from '../assets/icons/arbitrum-logo.svg';
import AvalanchIcon from '../assets/icons/avalanche-logo.svg';
import OptimismIcon from '../assets/icons/optimism-logo.svg';

const OPTIONS = [
    { name: 'Ethereum', value: '0x1', icon: <EthereumIcon /> },
    { name: 'Polygon', value: '137', icon: <PolygonIcon /> },
    { name: 'BSC', value: '56', icon: <BSCIcon /> },
    { name: 'Arbitrum', value: '42161', icon: <ArbitrumIcon /> },
    { name: 'Optimism', value: '10', icon: <OptimismIcon /> },
    { name: 'Avalanche', value: '43114', icon: <AvalanchIcon /> },
];

export const networkMapping: { [key: string]: string } = {
    '0x1': 'Ethereum',
    '0x5': 'Goerli',
    '0x0xaa36a7': 'Sepolia',
    '137': 'Polygon',
    '80001': 'Polygon Mumbai',
    '56': 'BSC',
    '42161': 'Arbitrum',
    '421613': 'Arbitrum Goerli',
    '10': 'Optimism',
    '420': 'Optimism Goerli',
    '43114': 'Avalanche',
    '43113': 'Avalanche Fuji',
};

interface NetworkSelectorProps {
    onChange: (value: string) => void;
    value: string | undefined;
}

export function NetworkSelector({ onChange, value }: NetworkSelectorProps) {
    const [hidden, setHidden] = useState(true);
    const currentOption = OPTIONS.find((option) => option.value === value);

    return (
        <Styled.Container>
            {!hidden && (
                <Styled.Options>
                    {OPTIONS.map((option) => (
                        <Styled.Option
                            key={option.value}
                            onClick={() => {
                                onChange(option.value);
                                setHidden(true);
                            }}
                        >
                            <Styled.Icon>{option.icon}</Styled.Icon>
                            {option.name}
                        </Styled.Option>
                    ))}
                </Styled.Options>
            )}
            <Styled.Selected
                onClick={() => {
                    setHidden(!hidden);
                }}
            >
                <Styled.SmallIcon>{currentOption && currentOption.icon}</Styled.SmallIcon>
                {/* {network.name} */}
            </Styled.Selected>
        </Styled.Container>
    );
}
