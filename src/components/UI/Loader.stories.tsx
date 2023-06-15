import type { Meta } from '@storybook/react';
import React from 'react';
import { Collapsable } from './Collapsable';
import { UilLamp } from '@iconscout/react-unicons';

import * as theme from '../../shared/theme';

import { Placeholder, Loader } from './Loader';

const meta: Meta<typeof Placeholder> = {
    component: Placeholder,
};

export const PlaceholderPrimary = () => (
    <div style={{ width: '350px' }}>
        <Collapsable title='Spotlight' icon={<UilLamp />} defaultState={true}>
            <Placeholder />
        </Collapsable>
    </div>
);

export const LoaderPrimary = () => (
    <div
        style={{
            width: '350px',
            height: '350px',
            background: theme.primaryBackground,
            display: 'flex',
            alignItems: 'center',
        }}
    >
        <Loader />
    </div>
);

export default meta;
