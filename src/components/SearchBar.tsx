import React, { useEffect } from 'react';

import { Input } from './UI/Input';
import { Dropdown } from './UI/Dropdown';
import { logNetworkChange } from '../shared/logs';
import { getActiveTabUrl } from '../helpers/getActiveTab';
import { RadioGroup, RadioOption } from './UI/Radio';

import { networkDropdownOptions } from '../types/networks';

import * as Styled from './SearchBar.styles';

export enum SearchMode {
    Address = 'address',
    URL = 'url',
}

export type SearchState = {
    mode: SearchMode;
    chainId: string;
    address: string;
    url: string;
};

const searchOptions: RadioOption[] = [
    {
        key: SearchMode.Address,
        title: 'Blockchain Address',
    },
    {
        key: SearchMode.URL,
        title: 'URL',
    },
];
interface SearchBarProps {
    state: SearchState;
    onChange: (state: SearchState) => void;
}

export function SearchBar({ state, onChange }: SearchBarProps) {
    const isAddress = state.mode === SearchMode.Address;

    useEffect(() => {
        if (state.mode === SearchMode.URL) {
            loadUrl();
        }
    }, [state.mode]);

    async function loadUrl() {
        const url = await getActiveTabUrl();
        onChange({ ...state, url });
    }

    function onNetworkChange(chainId: string) {
        onChange({ ...state, chainId });
        logNetworkChange(chainId);
    }

    const handleAddressChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        onChange({ ...state, address: event.target.value });
        event.currentTarget.setCustomValidity('');
    };

    const handleUrlChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        onChange({ ...state, url: event.target.value });
        event.currentTarget.setCustomValidity('');
    };

    const setInvalidMessage: React.FormEventHandler<HTMLInputElement> = (event) => {
        const msg = `Input must be a valid ${isAddress ? 'address' : 'URL'}`;
        event.currentTarget.setCustomValidity(msg);
    };

    return (
        <Styled.Container>
            <Styled.Header>Search by</Styled.Header>
            <RadioGroup
                selected={state.mode}
                onChange={(mode) => onChange({ ...state, mode: mode as SearchMode })}
                options={searchOptions}
            />
            {isAddress && (
                <>
                    <Dropdown
                        title='Network'
                        onChange={onNetworkChange}
                        value={state.chainId}
                        options={networkDropdownOptions}
                    />
                    <Input
                        title='Address'
                        type='text'
                        value={state.address}
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
                    value={state.url}
                    onChange={handleUrlChange}
                    style={{ flex: 1 }}
                    onInvalid={setInvalidMessage}
                    autoFocus
                />
            )}
        </Styled.Container>
    );
}
