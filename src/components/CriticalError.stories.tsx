import type { Meta } from '@storybook/react';
import React, { useState } from 'react';
import { ErrorPage } from './CriticalError';

const meta: Meta<typeof ErrorPage> = {
    component: ErrorPage,
};

export const Default = () => (
    <div style={{ width: '370px', height: '400px', border: '1px black solid' }}>
        <ErrorPage error='Something went wrong' />
    </div>
);

export default meta;
