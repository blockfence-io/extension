import React from 'react';

import { FeedbackURL, GithubURL, WebsiteURL } from '../components/WebsiteURL';
import * as Menu from '../components/UI/Menu';
import * as storage from '../shared/storage';
import { RadioMenuItem } from '../components/RadioMenuItem';
import { ButtonMenuItem } from './ButtonMenuItem';

export function SettingsMenu() {
    return (
        <Menu.Menu>
            <RadioMenuItem
                title='Active Mode'
                body='The Blockfence Extension will Automatically Pop-Up in Active Mode for Every Transaction'
                onValueChange={storage.setEnableHooks}
                initializer={storage.getEnableHooks}
            />
            <Menu.Separator />
            <RadioMenuItem
                title='URL Analysis'
                body='The Blockfence Extension will use the current URL to Analyze the Transaction and search for phishing
                attacks'
                onValueChange={storage.setEnableUrlAnalysis}
                initializer={storage.getEnableUrlAnalysis}
            />
            <Menu.Separator />
            <ButtonMenuItem
                title='Reset Muted Txs'
                body='Delete all stored muted Transactions.'
                onClick={storage.clearAllMutedAddresses}
            />
            <Menu.Separator />
            <GithubURL />
            <WebsiteURL />
            <FeedbackURL />
        </Menu.Menu>
    );
}
