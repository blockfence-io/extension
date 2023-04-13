import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { addMutedAddresses, isMutedAddresses, removeMutedAddresses } from '../../shared/storage';

interface MuteButtonProps {
    address: string;
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
export function MuteButton({ address }: MuteButtonProps) {
    const [muted, setMuted] = useState(false);
    useEffect(() => {
        isMutedAddresses(address).then((muted) => setMuted(muted));
    });

    async function toggleMute() {
        if (muted) {
            await removeMutedAddresses(address);
        } else {
            await addMutedAddresses(address);
        }
        setMuted(!muted);
    }

    return <Span onClick={toggleMute}>{muted ? 'UNMUTE' : 'MUTE'}</Span>;
}
