import React from 'react';
import { Collapsable } from './Collapsable';
import { UilLamp } from '@iconscout/react-unicons';

import { Placeholder } from './Loader';

export const Normal = () => (
    <div style={{ width: '350px' }}>
        <Collapsable title='Spotlight' icon={<UilLamp />} defaultState={true}>
            <Placeholder />
        </Collapsable>
    </div>
);
