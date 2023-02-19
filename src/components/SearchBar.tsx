import React, { useState } from 'react';

import { Button } from './UI/Button';
import { Input } from './UI/Input';
import { NetworkSelector } from './NetworkSelector';

import * as Styled from './SearchBar.styles';

interface SearchBarProps {
    onClick: (chainId: string, to: string) => void;
    disabled: boolean;
}

export function SearchBar({ onClick, disabled }: SearchBarProps) {
    const [input, setInput] = useState('');
    const [chainId, setChainId] = useState('0x1');

    async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        await onClick(chainId, input);
    }

    return (
        <Styled.Form onSubmit={handleSubmit}>
            <NetworkSelector onChange={setChainId} />
            <Input type='text' value={input} onChange={(e) => setInput(e.target.value)} style={{ flex: 1 }} />
            <Button type='submit' disabled={input === '' || disabled} style={{ flex: 0 }}>
                Scan
            </Button>
        </Styled.Form>
    );
}
