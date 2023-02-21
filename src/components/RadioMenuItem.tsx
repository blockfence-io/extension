import React from 'react';

import { Radio } from './UI/Radio';
import * as Menu from './UI/Menu';

interface RadioMenuItemProps {
    title: string;
    body: string;
    onValueChange: (enable: boolean) => Promise<void>;
    enable: boolean | null;
}

export function RadioMenuItem({ title, body, onValueChange, enable }: RadioMenuItemProps) {
    return (
        <>
            <Menu.Title>
                <div>{title}</div>
                <Radio onChange={onValueChange} value={enable || false} disabled={enable === null} />
            </Menu.Title>
            <Menu.Body>{body}</Menu.Body>
        </>
    );
}
