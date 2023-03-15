import React from 'react';
import BlobSmall from '../../assets/standalone/blob_small.svg';
import ArrowIcon from '../../assets/standalone/arrow.svg';

import * as Styled from './Banner.styles';

export function Banner() {
    return (
        <Styled.Container>
            <BlobSmall />
            <Styled.Title>Give it a try.</Styled.Title>
            <Styled.Subtitle>See Blockfence in action</Styled.Subtitle>
            <ArrowIcon />
        </Styled.Container>
    );
}
