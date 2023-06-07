import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Layout } from './Layout';

const meta: Meta<typeof Layout> = {
    component: Layout,
    argTypes: {
        showSettings: { control: { type: 'boolean' }, defaultValue: true },
        fullpageMode: { control: { type: 'boolean' }, defaultValue: true },
        severity: {},
    },
};
export default meta;
type Story = StoryObj<typeof Layout>;

export const Primary: Story = {
    render: ({ ...args }) => {
        return (
            <div style={{ width: '390px', height: '800px', background: '#F0F6FF' }}>
                <Layout {...args} />
            </div>
        );
    },
};
