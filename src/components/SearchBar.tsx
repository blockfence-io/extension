import React, { useState, useEffect } from 'react';

import { Button } from './UI/Button';
import { Input } from './UI/Input';
import { NetworkSelector } from './NetworkSelector';
import { logNetworkChange } from '../shared/logs';
import { usePersistentState } from '../shared/usePersistentState';
import { getActiveTabUrl } from '../helpers/getActiveTab';
import { RadioGroup, RadioOption } from './UI/Radio';

import * as Styled from './SearchBar.styles';

const searchOptions: RadioOption[] = [
    {
        key: 1,
        title: 'Blockchain Address',
    },
    {
        key: 2,
        title: 'URL',
    },
];

interface SearchBarProps {
    onAddressClick: (chainId: string, to: string) => void;
    onURLClick: (url: string) => void;
    disabled?: boolean;
    persistent?: boolean;
}

export function SearchBar({ onAddressClick, onURLClick, disabled = false, persistent = true }: SearchBarProps) {
    const [address, setAddress] = useState('');
    const [chainId, setChainId] = persistent ? usePersistentState<string>('chainId', '0x1') : useState('0x1');
    const [url, setUrl] = useState('');
    // const [isAddress, setIsAddress] = useState(true);
    const [searchMode, setSearchMode] = useState(searchOptions[0].key);
    const isAddress = searchMode == searchOptions[0].key;

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
        <Styled.Form onSubmit={handleSubmit}>
            <Styled.Header>Search by</Styled.Header>
            <RadioGroup selected={searchMode} onChange={setSearchMode} options={searchOptions} />
            {isAddress && (
                <>
                    <NetworkSelector onChange={onNetworkChange} value={chainId} />
                    <Input
                        title='Address'
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
                    title='URL'
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
