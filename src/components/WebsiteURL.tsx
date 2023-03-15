import React from 'react';
import BlockfenceIcon from '../assets/logo-circle.svg';
import GithubIcon from '../assets/icons/github.svg';
import * as Styled from './WebsiteURL.styled';

export function WebsiteURL() {
    return (
        <Styled.Link href='https://blockfence.io' target='_blank' rel='noreferrer'>
            <div>
                <BlockfenceIcon />
            </div>
            <div>blockfence.io</div>
        </Styled.Link>
    );
}

export function GithubURL() {
    return (
        <Styled.Link href='https://github.com/blockfence-io/extension' target='_blank' rel='noreferrer'>
            <div>
                <GithubIcon />
            </div>
            <div>GitHub</div>
        </Styled.Link>
    );
}
