import React, { useState } from 'react';

import { Button } from './UI/Button';
import { Input } from './UI/Input';
import { NetworkSelector } from './NetworkSelector';

import * as Styled from './SearchBar.styles';

interface SearchBarProps {
    onClick: (chainId: string, to: string) => void;
}

export function SearchBar({ onClick }: SearchBarProps) {
    const [input, setInput] = useState('');
    const [chainId, setChainId] = useState('0x1');
    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true);
        await onClick(chainId, input);
        setIsLoading(false);
    }

    return (
        <Styled.Form onSubmit={handleSubmit}>
            <NetworkSelector onChange={setChainId} />
            <Input type='text' value={input} onChange={(e) => setInput(e.target.value)} style={{ flex: 1 }} />
            <Button type='submit' disabled={input === '' || isLoading} style={{ flex: 0 }}>
                Scan
            </Button>
        </Styled.Form>
    );
}
