import React, { useState } from 'react';
import * as Styled from './NetworkSelector.styles';

const OPTIONS = [
    { name: 'Mainnet', value: '0x1' },
    { name: 'Goerli', value: '0x5' },
    { name: 'Sepolia', value: '0x0xaa36a7' },
];

interface NetworkSelectorProps {
    onChange: (value: string) => void;
}

export function NetworkSelector({ onChange }: NetworkSelectorProps) {
    const [network, setNetwork] = useState(OPTIONS[0]);
    const [hidden, setHidden] = useState(true);

    return (
        <Styled.Container>
            <Styled.Selected
                onClick={() => {
                    setHidden(!hidden);
                }}
            >
                {network.name}
            </Styled.Selected>
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
        </Styled.Container>
    );
}
