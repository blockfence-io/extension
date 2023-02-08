import React, { useState } from 'react';
import { Radio } from './Radio';

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
