import type { Meta } from '@storybook/react';
import React, { useState } from 'react';
import * as Menu from './Menu';
import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
    component: Toggle,
};

export default meta;

export const Default = () => {
    const [enabled, setEnabled] = useState(false);
    return (
        <div style={{ width: '600px', height: '600px', background: 'gray' }}>
            <Menu.Menu>
                <Menu.Title>
                    <div>Active Mode</div>
                    <Toggle
                        value={enabled}
                        onChange={(newStatus) => {
                            setEnabled(newStatus);
                        }}
                    />
                </Menu.Title>
                <Menu.Body>
                    The Blockfence Extension will Automatically Pop-Up in Active Mode for Every Transaction
                </Menu.Body>
                <Menu.Separator />
                <Menu.Link href='#'>About Blockfence</Menu.Link>
                <Menu.Link href='#'>Term of use</Menu.Link>
                <Menu.Link href='#'>GitHub</Menu.Link>
            </Menu.Menu>
            This is an example div.
        </div>
    );
};
