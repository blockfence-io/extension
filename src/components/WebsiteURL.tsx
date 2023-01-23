import React from 'react';
import Icon from '../assets/globe-solid.svg';
import * as Styled from './WebsiteURL.styled';

export function WebsiteURL() {
    return (
        <Styled.Link href='https://blockfence.io' target='_blank'>
            <div>
                <Icon />
            </div>
            <div>blockfence.io</div>
        </Styled.Link>
    );
}
