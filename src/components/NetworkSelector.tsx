import React, { useState } from 'react';
import * as Styled from './NetworkSelector.styles';

const OPTIONS = [
    { name: 'Mainnet', value: '0x1' },
    { name: 'Polygon', value: '137' },
    { name: 'BSC', value: '56' },
    { name: 'Arbitrum', value: '42161' },
    { name: 'Optimism', value: '10' },
    { name: 'Avalanche', value: '43114' },
];

export const networkMapping: { [key: string]: string } = {
    '0x1': 'Ethereum Mainnet',
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
}

export function NetworkSelector({ onChange }: NetworkSelectorProps) {
    const [network, setNetwork] = useState(OPTIONS[0]);
    const [hidden, setHidden] = useState(true);

    return (
        <Styled.Container>
            {!hidden && (
                <Styled.Options>
                    {OPTIONS.map((option) => (
                        <Styled.Option
                            key={option.value}
                            onClick={() => {
                                setNetwork(option);
                                onChange(option.value);
                                setHidden(true);
                            }}
                        >
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
                {network.name}
            </Styled.Selected>
        </Styled.Container>
    );
}
