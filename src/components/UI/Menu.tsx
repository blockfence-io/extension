import React, { useState } from 'react';

import { UilEllipsisV } from '@iconscout/react-unicons';

import * as Styled from './Menu.styles';
export { Title, Body, Separator, Link } from './Menu.styles';
import { logSettingsMenuClick } from '../../shared/logs';

interface MenuProps {
    children: React.ReactNode;
}

export function Menu({ children }: MenuProps) {
    const [visible, setVisible] = useState(false);

    function toggleMenu() {
        setVisible(!visible);
        logSettingsMenuClick();
    }

    return (
        <Styled.Container>
            <Styled.Controller visible={visible} onClick={toggleMenu}>
                <UilEllipsisV size='16' />
            </Styled.Controller>
            <Styled.Overlay visible={visible}>{children}</Styled.Overlay>
        </Styled.Container>
    );
}
