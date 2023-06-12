import type { Meta } from '@storybook/react';
import React, { useState } from 'react';
import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
    component: Toggle,
};

export const World = () => {
    const [enabled, setEnabled] = useState(false);

    return (
        <Toggle
            label='Notify on every transaction'
            value={enabled}
            onChange={(newStatus) => {
                setEnabled(newStatus);
            }}
        />
    );
};

export default meta;
