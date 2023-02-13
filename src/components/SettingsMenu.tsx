import React, { useState, useEffect } from 'react';

import { Radio } from '../components/UI/Radio';
import { GithubURL, WebsiteURL } from '../components/WebsiteURL';
import * as Menu from '../components/UI/Menu';

export function SettingsMenu() {
    const [enableHooks, setEnableHooks] = useState<boolean | null>(null);

    async function updateSettings(enableHooks: boolean) {
        setEnableHooks(enableHooks);
        await chrome.storage.local.set({ enableHooks: enableHooks });
    }

    async function getEnableHooksStatus() {
        const storage = await chrome.storage.local.get('enableHooks');
        setEnableHooks(storage.enableHooks);
    }

    useEffect(() => {
        getEnableHooksStatus();
    }, []);

    return (
        <Menu.Menu>
            <Menu.Title>
                <div>Active Mode</div>
                <Radio onChange={updateSettings} value={enableHooks || false} disabled={enableHooks === null} />
            </Menu.Title>
            <Menu.Body>
                The Blockfence Extension will Automatically Pop-Up in Active Mode for Every Transaction
            </Menu.Body>
            <Menu.Separator />
            <GithubURL />
            <WebsiteURL />
        </Menu.Menu>
    );
}
