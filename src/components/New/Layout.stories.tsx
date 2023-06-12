import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Layout } from './Layout';
import { SearchBar, SearchMode, SearchState } from '../SearchBar';
import { Button } from '../UI/Button';

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

export const WithSearchBar: Story = {
    render: ({ ...args }) => {
        const [searchInput, setSearchInput] = useState<SearchState>({
            mode: SearchMode.Address,
            chainId: '',
            url: '',
            address: '',
        });

        return (
            <div style={{ width: '390px', height: '800px', background: '#F0F6FF' }}>
                <Layout
                    {...args}
                    panel={<SearchBar onChange={setSearchInput} state={searchInput} />}
                    footer={<Button>Scan</Button>}
                />
            </div>
        );
    },
};

export const WithAllParts: Story = {
    render: ({ ...args }) => {
        const [searchInput, setSearchInput] = useState<SearchState>({
            mode: SearchMode.Address,
            chainId: '',
            url: '',
            address: '',
        });

        return (
            <div style={{ width: '390px', height: '800px', background: '#F0F6FF' }}>
                <Layout
                    {...args}
                    panel={<SearchBar onChange={setSearchInput} state={searchInput} />}
                    body={<div>Body</div>}
                    footer={<Button>Scan</Button>}
                />
            </div>
        );
    },
};

export const InLoading: Story = {
    render: ({ ...args }) => {
        const [searchInput, setSearchInput] = useState<SearchState>({
            mode: SearchMode.Address,
            chainId: '',
            url: '',
            address: '',
        });

        return (
            <div style={{ width: '390px', height: '800px', background: '#F0F6FF' }}>
                <Layout
                    {...args}
                    panel={<SearchBar onChange={setSearchInput} state={searchInput} />}
                    body={<div>Body</div>}
                    footer={<Button>Scan</Button>}
                    fullpageMode={true}
                    isLoading={true}
                />
            </div>
        );
    },
};
