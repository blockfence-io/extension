import type { Meta } from '@storybook/react';
import React from 'react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
    component: Button,
};

export const World = () => (
    <div style={{ background: 'black' }}>
        <Button>Submit</Button>
    </div>
);

export default meta;
