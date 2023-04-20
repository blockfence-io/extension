import React from 'react';
import { txID } from '../../shared/storage';
import { usePersistentState } from '../../shared/usePersistentState';
import { UilCheckSquare, UilSquareFull } from '@iconscout/react-unicons';
import * as Styled from './MuteButton.styles';

interface MuteButtonProps {
    address: string;
    chainId: string;
    text: string;
    url: string;
}

export function MuteButton({ address, chainId, text, url }: MuteButtonProps) {
    const [mutedAddresses, setMutedAddresses] = usePersistentState<{ [key: string]: boolean }>('mutedAddresses', {});
    const txId = txID(address, chainId, url);
    const isMuted = mutedAddresses?.[txId];

    const size = 16;

    async function toggleMute() {
        setMutedAddresses({ ...mutedAddresses, [txId]: !isMuted });
    }

    return (
        <Styled.Container onClick={toggleMute}>
            {isMuted ? <UilCheckSquare size={size} /> : <UilSquareFull size={size} />}
            {text}
        </Styled.Container>
    );
}
