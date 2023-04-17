import React from 'react';
import styled from 'styled-components';
import { txID } from '../../shared/storage';
import { usePersistentState } from '../../shared/usePersistentState';

interface MuteButtonProps {
    address: string;
    chainId: string;
    url: string;
}

export const Span = styled.span`
    user-select: none;
    cursor: pointer;

    & svg {
        vertical-align: bottom;
        margin-right: 4px;
    }

    opacity: 0.8;
    &:hover {
        text-decoration: underline;
        opacity: 1;
    }
`;

/* TODO Design Me */
export function MuteButton({ address, chainId, url }: MuteButtonProps) {
    const [mutedAddresses, setMutedAddresses] = usePersistentState<{ [key: string]: boolean }>('mutedAddresses', {});
    const txId = txID(address, chainId, url);
    const isMuted = mutedAddresses?.[txId];

    async function toggleMute() {
        setMutedAddresses({ ...mutedAddresses, [txId]: !isMuted });
    }

    return <Span onClick={toggleMute}>{isMuted ? 'UNMUTE' : 'MUTE'}</Span>;
}
