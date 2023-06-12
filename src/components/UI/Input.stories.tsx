import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
    component: Input,
    argTypes: {
        title: {
            control: { type: 'text' },
        },
        placeholder: {
            control: { type: 'text' },
        },
        value: {
            control: { type: 'text' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
    args: {
        placeholder: 'Enter address',
    },
};

export const WithTitle: Story = {
    args: {
        title: 'Address',
        placeholder: 'Enter address',
    },
};

const InvalidInputForm = () => {
    function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <Input title='Address' placeholder='Enter address' pattern='0x.{40}' defaultValue='0xbla' />
        </form>
    );
};

export const WithInvalidInput: Story = {
    render: () => <InvalidInputForm />,
};
