import React, { useState, useEffect } from 'react';

import { Radio } from './UI/Radio';
import * as Menu from './UI/Menu';
import * as Logger from '../shared/logs';

interface RadioMenuItemProps {
    title: string;
    body: string;
    onValueChange: (enable: boolean) => Promise<void>;
    initializer: () => Promise<boolean>;
}

export function RadioMenuItem({ title, body, onValueChange, initializer }: RadioMenuItemProps) {
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
                <Radio onChange={onToggleClicked} value={enable || false} disabled={enable === null} />
            </Menu.Title>
            <Menu.Body>{body}</Menu.Body>
        </>
    );
}
