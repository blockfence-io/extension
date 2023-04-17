import React from 'react';
import { txID } from '../../shared/storage';
import { usePersistentState } from '../../shared/usePersistentState';
import { UilTvRetro, UilTvRetroSlash } from '@iconscout/react-unicons';

interface MuteButtonProps {
    address: string;
    chainId: string;
    url: string;
}

/* TODO Design Me */
export function MuteButton({ address, chainId, url }: MuteButtonProps) {
    const [mutedAddresses, setMutedAddresses] = usePersistentState<{ [key: string]: boolean }>('mutedAddresses', {});
    const txId = txID(address, chainId, url);
    const isMuted = mutedAddresses?.[txId];

    async function toggleMute() {
        setMutedAddresses({ ...mutedAddresses, [txId]: !isMuted });
    }

    return isMuted ? <UilTvRetroSlash onClick={toggleMute} size='32' /> : <UilTvRetro onClick={toggleMute} size='32' />;
}
