import type { Meta } from '@storybook/react';
import React, { useState } from 'react';
import { Panel } from './Panel';

const meta: Meta<typeof Panel> = {
    component: Panel,
};

export default meta;

export const Primary = () => {
    return <Panel>This is an example</Panel>;
};
