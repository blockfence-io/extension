import React from 'react';

import { UilArrowLeft } from '@iconscout/react-unicons';
import URLIcon from '../assets/icons/url.svg';

import { SupportedNetworks } from '../types/networks';
import { Button } from './UI/Button';
import { Copy } from './UI/Copy';

import * as Styled from './NavigationBar.styles';

interface NavigationBarProps {
    network?: keyof typeof SupportedNetworks;
    address?: string;
    url?: string;
    compact?: boolean;
    onBack?: () => void;
    disabled?: boolean;
}

function cleanupURL(url: string): string {
    if (url.startsWith('http://')) {
        return url.substring(7);
    } else if (url.startsWith('https://')) {
        return url.substring(8);
    } else {
        return url;
    }
}

export function NavigationBar({
    onBack,
    network,
    address,
    url,
    disabled = false,
    compact = false,
}: NavigationBarProps) {
    const formatAddress = (address: string) => `${address.slice(0, 8)}...${address.slice(-4)}`.toUpperCase();
    const networkIcon = network ? SupportedNetworks[network].icon : undefined;

    return (
        <Styled.Container>
            {onBack && (
                <Styled.Navigation>
                    <Button variant='light' iconOnly onClick={onBack} disabled={disabled}>
                        <UilArrowLeft />
                    </Button>
                </Styled.Navigation>
            )}

            <Styled.InfoGroup compact={compact}>
                {address && (
                    <Styled.Info compact={compact}>
                        {!compact && (
                            <Styled.Icon type='address'>
                                <Styled.Icon type='normal'>{networkIcon}</Styled.Icon>
                            </Styled.Icon>
                        )}
                        <Styled.Key>
                            Address <Copy text={address} size='16' />
                        </Styled.Key>
                        <Styled.Value>
                            <div>{formatAddress(address)}</div>
                        </Styled.Value>
                    </Styled.Info>
                )}
                {url && (
                    <Styled.Info compact={compact}>
                        {!compact && (
                            <Styled.Icon type='url'>
                                <URLIcon />
                            </Styled.Icon>
                        )}
                        <Styled.Key>
                            URL
                            <Copy text={url} size='16' />
                        </Styled.Key>
                        <Styled.TruncatedValue>{cleanupURL(url)}</Styled.TruncatedValue>
                    </Styled.Info>
                )}
            </Styled.InfoGroup>
        </Styled.Container>
    );
}
