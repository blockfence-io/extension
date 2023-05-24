import React, { useState, useEffect } from 'react';

import { Button } from './UI/Button';
import { Input } from './UI/Input';
import { NetworkSelector } from './NetworkSelector';
import { logNetworkChange } from '../shared/logs';
import { usePersistentState } from '../shared/usePersistentState';
import { getActiveTabUrl } from '../helpers/getActiveTab';
import { Radio } from './UI/Radio';

import { Severity } from '../types/api';

import * as Styled from './SearchBar.styles';

interface SearchBarProps {
    onAddressClick: (chainId: string, to: string) => void;
    onURLClick: (url: string) => void;
    disabled: boolean;
    severity: undefined | Severity;
    compact?: boolean;
    persistent?: boolean;
}

export function SearchBar({
    onAddressClick,
    onURLClick,
    disabled,
    severity,
    compact,
    persistent = true,
}: SearchBarProps) {
    const [address, setAddress] = useState('');
    const [chainId, setChainId] = persistent ? usePersistentState<string>('chainId', '0x1') : useState('0x1');
    const [url, setUrl] = useState('');
    const [isAddress, setIsAddress] = useState(true);

    async function initUrl() {
        const url = await getActiveTabUrl();
        setUrl(url);
    }

    if (persistent) {
        useEffect(() => {
            initUrl();
        }, []);
    }

    function onNetworkChange(value: string) {
        setChainId(value);
        logNetworkChange(value);
    }

    async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        if (isAddress) {
            onAddressClick(chainId || '0x1', address);
        } else {
            onURLClick(url);
        }
    }

    const handleAddressChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setAddress(event.target.value);
        event.currentTarget.setCustomValidity('');
    };

    const handleUrlChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setUrl(event.target.value);
        event.currentTarget.setCustomValidity('');
    };

    const setInvalidMessage: React.FormEventHandler<HTMLInputElement> = (event) => {
        const msg = `Input must be a valid ${isAddress ? 'address' : 'URL'}`;
        event.currentTarget.setCustomValidity(msg);
    };

    const isButtonDisabled = () => {
        return disabled || (isAddress && address === '') || (!isAddress && url === '');
    };

    return (
        <Styled.Form onSubmit={handleSubmit} severity={severity} compact={compact}>
            {!compact && <Radio onChange={setIsAddress} value={isAddress} disabled={false} />}
            {isAddress && (
                <>
                    <NetworkSelector onChange={onNetworkChange} value={chainId} />
                    <Input
                        type='text'
                        value={address}
                        onChange={handleAddressChange}
                        style={{ flex: 1 }}
                        pattern='0x.{40}'
                        onInvalid={setInvalidMessage}
                        autoFocus
                    />
                </>
            )}

            {!isAddress && (
                <Input
                    type='url'
                    value={url}
                    onChange={handleUrlChange}
                    style={{ flex: 1 }}
                    onInvalid={setInvalidMessage}
                    autoFocus
                />
            )}
            <Button type='submit' disabled={isButtonDisabled()} style={{ flex: 0 }}>
                Scan
            </Button>
        </Styled.Form>
    );
}
