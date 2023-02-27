import React, { useState } from 'react';

import { Button } from './UI/Button';
import { Input } from './UI/Input';
import { NetworkSelector } from './NetworkSelector';
import { logNetworkChange } from '../shared/logs';

import * as Styled from './SearchBar.styles';

interface SearchBarProps {
    onClick: (chainId: string, to: string) => void;
    disabled: boolean;
}

export function SearchBar({ onClick, disabled }: SearchBarProps) {
    const [input, setInput] = useState('');
    const [chainId, setChainId] = useState('0x1');

    function onNetworkChange(value: string) {
        setChainId(value);
        logNetworkChange(value);
    }

    async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        await onClick(chainId, input);
    }

    const setInvalidMessage: React.FormEventHandler<HTMLInputElement> = (event) => {
        event.currentTarget.setCustomValidity('Input must be a valid address');
    };

    return (
        <Styled.Form onSubmit={handleSubmit}>
            <NetworkSelector onChange={onNetworkChange} />
            <Input
                type='text'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={{ flex: 1 }}
                pattern='0x.{40}'
                onInvalid={setInvalidMessage}
            />
            <Button type='submit' disabled={input === '' || disabled} style={{ flex: 0 }}>
                Scan
            </Button>
        </Styled.Form>
    );
}
