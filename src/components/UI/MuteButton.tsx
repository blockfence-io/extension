import React from 'react';
import styled from 'styled-components';
import { addMutedAddresses, getMutedAddresses } from '../../shared/storage';

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

export function MuteButton({ address }: MuteButtonProps) {
    /* TODO Design Me */
    async function muteAddress() {
        await addMutedAddresses(address);
        const mutedAddresses = await getMutedAddresses();
        console.log(mutedAddresses);
    }

    return <Span onClick={muteAddress}>MUTE</Span>;
}
