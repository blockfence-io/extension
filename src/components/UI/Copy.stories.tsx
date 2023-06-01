import type { Meta } from '@storybook/react';
import React, { useState } from 'react';
import { Copy } from './Copy';

const meta: Meta<typeof Copy> = {
    component: Copy,
};

export default meta;

export const Default = () => {
    const [input, setInput] = useState('');

    return (
        <div>
            Input: <input type='text' onChange={(e) => setInput(e.target.value)} value={input} />
            <Copy size='20' text={input} />
        </div>
    );
};
