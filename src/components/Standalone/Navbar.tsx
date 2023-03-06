import React from 'react';

import Logo from '../../assets/logo-white.svg';

import { UilGithub } from '@iconscout/react-unicons';
import { UilTwitter } from '@iconscout/react-unicons';
import { UilTelegram } from '@iconscout/react-unicons';

import * as Styled from './Navbar.styles';

const ICON_SIZE = '26px';

export function Navbar() {
    return (
        <Styled.Container>
            <Styled.Logo>
                <Logo />
                <Styled.Company>Blockfence</Styled.Company>
            </Styled.Logo>
            <Styled.Navigation>
                <a href='https://github.com/blockfence-io/extension' target='_blank' rel='noreferrer'>
                    <UilGithub size={ICON_SIZE} />
                </a>
                <a href='https://t.me/blockfence' target='_blank' rel='noreferrer'>
                    <UilTelegram size={ICON_SIZE} />
                </a>
                <a href='https://twitter.com/blockfence_io' target='_blank' rel='noreferrer'>
                    <UilTwitter size={ICON_SIZE} />
                </a>
                {/* <a href='https://www.reddit.com/r/blockfence/' target='_blank' rel='noreferrer'>
                    <UilRedditAlienAlt size={ICON_SIZE} />
                </a> */}
                {/* <a href='https://www.blockfence.io' target='_blank' rel='noreferrer'>
                    <UilHome size={ICON_SIZE} />
                </a> */}
            </Styled.Navigation>
        </Styled.Container>
    );
}
