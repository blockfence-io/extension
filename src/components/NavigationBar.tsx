import React from 'react';

import { UilArrowLeft } from '@iconscout/react-unicons';
import URLIcon from '../assets/icons/url.svg';
import AddressIcon from '../assets/icons/address.svg';

import { SupportedNetworks } from '../types/networks';
import { Button } from './UI/Button';
import { Copy } from './UI/Copy';

import * as Styled from './NavigationBar.styles';

interface NavigationBarProps {
    network?: keyof typeof SupportedNetworks;
    address?: string;
    url?: string;
    onBack: () => void;
    disabled?: boolean;
}

export function NavigationBar({ onBack, network, address, url, disabled = false }: NavigationBarProps) {
    const formatAddress = (address: string) => `${address.slice(0, 8)}...${address.slice(-4)}`.toUpperCase();
    const networkName = network ? SupportedNetworks[network].title : '';
    const networkIcon = network ? SupportedNetworks[network].icon : undefined;

    return (
        <Styled.Container>
            <Styled.Navigation>
                <Button variant='light' iconOnly onClick={onBack} disabled={disabled}>
                    <UilArrowLeft />
                </Button>
            </Styled.Navigation>

            <Styled.InfoGroup>
                {network && address ? (
                    <>
                        <Styled.Info>
                            <Styled.Icon type='normal'>{networkIcon}</Styled.Icon>
                            <Styled.Key>Network</Styled.Key>
                            <Styled.Value>{networkName}</Styled.Value>
                        </Styled.Info>
                        <Styled.Info>
                            <Styled.Icon type='address'>
                                <AddressIcon />
                            </Styled.Icon>
                            <Styled.Key>Address</Styled.Key>
                            <Styled.Value>
                                <div>{formatAddress(address)}</div> <Copy text={address} size='16' />
                            </Styled.Value>
                        </Styled.Info>
                    </>
                ) : (
                    <Styled.Info>
                        <Styled.Icon type='url'>
                            <URLIcon />
                        </Styled.Icon>
                        <Styled.Key>URL</Styled.Key>
                        <Styled.TruncatedValue>{url}</Styled.TruncatedValue>
                    </Styled.Info>
                )}
            </Styled.InfoGroup>
        </Styled.Container>
    );
}
