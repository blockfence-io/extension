import React, { useState, useEffect } from 'react';

import { GithubURL, WebsiteURL } from '../components/WebsiteURL';
import * as Menu from '../components/UI/Menu';
import * as Logger from '../shared/logs';
import * as storage from '../shared/storage';
import { RadioMenuItem } from '../components/RadioMenuItem';

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
            <RadioMenuItem
                title='Active Mode'
                body='The Blockfence Extension will Automatically Pop-Up in Active Mode for Every Transaction'
                onValueChange={updateActiveModeSettings}
                enable={enableHooks}
            />
            <Menu.Separator />
            <RadioMenuItem
                title='Url Analysis'
                body='The Blockfence Extension will use the current URL to Analyze the Transaction and search for phishing
                attacks'
                onValueChange={updateUrlAnalysisSettings}
                enable={enableUrlAnalysis}
            />
            <Menu.Separator />
            <GithubURL />
            <WebsiteURL />
        </Menu.Menu>
    );
}
