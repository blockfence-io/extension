import React, { useState } from 'react';
import * as Styled from './NetworkSelector.styles';

const OPTIONS = [
    { name: 'Mainnet', value: 1 },
    { name: 'Goerli', value: 5 },
    { name: 'Sepolia', value: 11155111 },
];

interface NetworkSelectorProps {
    onChange: (value: number) => void;
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
