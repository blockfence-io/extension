import React from 'react';

import BlockfenceIcon from '../assets/logo-circle.svg';
import GithubIcon from '../assets/icons/github.svg';
import { UilFeedback } from '@iconscout/react-unicons';

import * as Styled from './WebsiteURL.styled';

export function WebsiteURL({ iconOnly = false }: { iconOnly?: boolean }) {
    return (
        <Styled.Link href='https://blockfence.io' target='_blank' rel='noreferrer'>
            <div>
                <BlockfenceIcon />
            </div>
            {!iconOnly && <div>blockfence.io</div>}
        </Styled.Link>
    );
}

export function GithubURL({ iconOnly = false }: { iconOnly?: boolean }) {
    return (
        <Styled.Link href='https://github.com/blockfence-io/extension' target='_blank' rel='noreferrer'>
            <div>
                <GithubIcon />
            </div>
            {!iconOnly && <div>GitHub</div>}
        </Styled.Link>
    );
}

export function FeedbackURL({ ...rest }) {
    return (
        <Styled.Link href='https://gxj5vszn2bg.typeform.com/to/bivONce2' target='_blank' rel='noreferrer' {...rest}>
            <div>
                <UilFeedback size='14' />
            </div>
            <div>Submit Feedback</div>
        </Styled.Link>
    );
}
