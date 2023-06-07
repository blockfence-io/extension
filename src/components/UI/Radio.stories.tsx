import type { Meta } from '@storybook/react';
import React, { useState } from 'react';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
    component: Radio,
};

export const World = () => {
    const [enabled, setEnabled] = useState(false);

    return (
        <Radio
            label='Notify on every transaction'
            value={enabled}
            onChange={(newStatus) => {
                setEnabled(newStatus);
            }}
        />
    );
};

export default meta;
