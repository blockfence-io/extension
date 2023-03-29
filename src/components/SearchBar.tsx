import React, { useState } from 'react';

import { Button } from './UI/Button';
import { Input } from './UI/Input';
import { NetworkSelector } from './NetworkSelector';
import { logNetworkChange } from '../shared/logs';
import { usePersistentState } from '../shared/usePersistentState';

import { Severity } from '../types/api';

import * as Styled from './SearchBar.styles';

interface SearchBarProps {
    onClick: (chainId: string, to: string) => void;
    disabled: boolean;
    severity: undefined | Severity;
    compact?: boolean;
}

export function SearchBar({ onClick, disabled, severity, compact }: SearchBarProps) {
    const [input, setInput] = useState('');
    const [chainId, setChainId] = usePersistentState<string>('chainId', '0x1');

    function onNetworkChange(value: string) {
        setChainId(value);
        logNetworkChange(value);
    }

    async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        if (chainId) await onClick(chainId, input);
    }

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setInput(event.target.value);
        event.currentTarget.setCustomValidity('');
    };

    const setInvalidMessage: React.FormEventHandler<HTMLInputElement> = (event) => {
        event.currentTarget.setCustomValidity('Input must be a valid address');
    };

    return (
        <Styled.Form onSubmit={handleSubmit} severity={severity} compact={compact}>
            <NetworkSelector onChange={onNetworkChange} value={chainId} />
            <Input
                type='text'
                value={input}
                onChange={handleChange}
                style={{ flex: 1 }}
                pattern='0x.{40}'
                onInvalid={setInvalidMessage}
                autoFocus
            />
            <Button type='submit' disabled={input === '' || disabled} style={{ flex: 0 }}>
                Scan
            </Button>
        </Styled.Form>
    );
}
