import React, { useState, useEffect } from 'react';

import { Toggle } from './UI/Toggle';
import * as Menu from './UI/Menu';
import * as Logger from '../shared/logs';

interface ToggleMenuItemProps {
    title: string;
    body: string;
    onValueChange: (enable: boolean) => Promise<void>;
    initializer: () => Promise<boolean>;
}

export function ToggleMenuItem({ title, body, onValueChange, initializer }: ToggleMenuItemProps) {
    const [enable, setEnable] = useState<boolean | null>(null);

    async function onToggleClicked(enable: boolean) {
        setEnable(enable);
        Logger.logSettingsToggled(title, enable);
        onValueChange(enable);
    }

    useEffect(() => {
        initializer().then((enable) => setEnable(enable));
    }, []);

    return (
        <>
            <Menu.Title>
                <div>{title}</div>
                <Toggle onChange={onToggleClicked} value={enable || false} disabled={enable === null} />
            </Menu.Title>
            <Menu.Body>{body}</Menu.Body>
        </>
    );
}
