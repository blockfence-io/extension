import type { Meta } from '@storybook/react';
import React from 'react';
import { Collapsable } from './Collapsable';
import { UilLamp } from '@iconscout/react-unicons';

import { Placeholder } from './Loader';

const meta: Meta<typeof Placeholder> = {
    component: Placeholder,
};

export const Normal = () => (
    <div style={{ width: '350px' }}>
        <Collapsable title='Spotlight' icon={<UilLamp />} defaultState={true}>
            <Placeholder />
        </Collapsable>
    </div>
);

export default meta;
