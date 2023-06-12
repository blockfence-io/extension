import React from 'react';

import { FeedbackURL, GithubURL, WebsiteURL } from '../components/WebsiteURL';
import * as Menu from '../components/UI/Menu';
import * as storage from '../shared/storage';
import { ToggleMenuItem } from './ToggleMenuItem';
import { ButtonMenuItem } from './ButtonMenuItem';
import { usePersistentState } from '../shared/usePersistentState';
import { logClearMutedTxsClick } from '../shared/logs';

export function SettingsMenu() {
    const [mutedAddresses, setMutedAddresses] = usePersistentState<{ [key: string]: boolean }>('mutedAddresses', {});
    const muteCount = mutedAddresses ? Object.keys(mutedAddresses).length : 0;

    async function clear() {
        logClearMutedTxsClick();
        setMutedAddresses({});
    }

    return (
        <Menu.Menu>
            <ToggleMenuItem
                title='Active Mode'
                body='The Blockfence Extension will Automatically Pop-Up in Active Mode for Every Transaction'
                onValueChange={storage.setEnableHooks}
                initializer={storage.getEnableHooks}
            />
            <Menu.Separator />
            <ToggleMenuItem
                title='URL Analysis'
                body='The Blockfence Extension will use the current URL to Analyze the Transaction and search for phishing
                attacks'
                onValueChange={storage.setEnableUrlAnalysis}
                initializer={storage.getEnableUrlAnalysis}
            />

            <Menu.Separator />
            <ButtonMenuItem title='Reset Muted Tx' onClick={clear} />
            <Menu.Body style={{ marginTop: '6px' }}>
                Click this button to re-enable {muteCount} Muted Blockfence Analysis
            </Menu.Body>

            <Menu.Separator />
            <GithubURL />
            <WebsiteURL />
            <FeedbackURL />
        </Menu.Menu>
    );
}
