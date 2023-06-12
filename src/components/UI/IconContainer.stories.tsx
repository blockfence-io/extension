import type { Meta } from '@storybook/react';
import React from 'react';

import { IconContainer } from './IconContainer';
import AddressIcon from '../../assets/icons/address.svg';

const meta: Meta<typeof IconContainer> = {
    component: IconContainer,
};

export const Primary = () => {
    return (
        <IconContainer type='url'>
            <AddressIcon />
        </IconContainer>
    );
};

export default meta;
