import React, { useState, useEffect } from 'react';

import { Radio } from '../components/UI/Radio';
import { GithubURL, WebsiteURL } from '../components/WebsiteURL';
import * as Menu from '../components/UI/Menu';
import * as Logger from '../shared/logs';
import * as storage from '../shared/storage';

export function SettingsMenu() {
    const [enableHooks, setEnableHooks] = useState<boolean | null>(null);
    const [enableUrlAnalysis, setEnableUrlAnalysis] = useState<boolean | null>(null);

    async function updateActiveModeSettings(enableHooks: boolean) {
        setEnableHooks(enableHooks);
        storage.setEnableHooks(enableHooks);
        Logger.logToggleActiveMode(enableHooks);
    }

    async function updateUrlAnalysisSettings(isEnabled: boolean) {
        setEnableUrlAnalysis(isEnabled);
        storage.setEnableUrlAnalysis(isEnabled);
        Logger.logToggleUrlTracking(isEnabled);
    }

    async function getEnableHooksStatus() {
        const enableHooks = await storage.getEnableHooks();
        setEnableHooks(enableHooks);
    }

    async function getUrlAnalysisSettings() {
        const isEnabled = await storage.getEnableUrlAnalysis();
        setEnableUrlAnalysis(isEnabled);
    }

    useEffect(() => {
        getEnableHooksStatus();
        getUrlAnalysisSettings();
    }, []);

    return (
        <Menu.Menu>
            <Menu.Title>
                <div>Active Mode</div>
                <Radio
                    onChange={updateActiveModeSettings}
                    value={enableHooks || false}
                    disabled={enableHooks === null}
                />
            </Menu.Title>
            <Menu.Body>
                The Blockfence Extension will Automatically Pop-Up in Active Mode for Every Transaction
            </Menu.Body>
            <Menu.Separator />

            <Menu.Title>
                <div>Url Analysis</div>
                <Radio
                    onChange={updateUrlAnalysisSettings}
                    value={enableUrlAnalysis || false}
                    disabled={enableUrlAnalysis === null}
                />
            </Menu.Title>
            <Menu.Body>
                The Blockfence Extension will use the current URL to Analyze the Transaction and search for phishing
                attacks
            </Menu.Body>
            <Menu.Separator />

            <GithubURL />
            <WebsiteURL />
        </Menu.Menu>
    );
}
