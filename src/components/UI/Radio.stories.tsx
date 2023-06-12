import type { Meta } from '@storybook/react';
import React, { useState } from 'react';
import { Radio, RadioGroup, RadioOption } from './Radio';

const meta: Meta<typeof Radio> = {
    component: Radio,
};

export const Default = () => {
    const [enabled, setEnabled] = useState(false);

    return (
        <div>
            <Radio
                label='Notify on every transaction'
                checked={enabled}
                onChange={(newStatus) => {
                    setEnabled(newStatus);
                }}
            />
        </div>
    );
};

const options: RadioOption[] = [
    {
        key: 1,
        title: 'First choice',
    },
    {
        key: 2,
        title: 'Second choice',
    },
    {
        key: 3,
        title: 'Third choice',
    },
];

export const DefaultRadioGroup = () => {
    const [selected, setSelected] = useState(options[0].key);

    return <RadioGroup selected={selected} onChange={setSelected} options={options} />;
};

export default meta;
