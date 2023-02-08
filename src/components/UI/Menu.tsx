import React, { useState } from 'react';
import * as Styled from './Menu.styles';
export { Title, Body, Separator, Link } from './Menu.styles';

import OptionsIcon from '../../assets/icons/menu.svg';

interface MenuProps {
    children: React.ReactNode;
}

export function Menu({ children }: MenuProps) {
    const [visible, setVisible] = useState(false);

    return (
        <Styled.Container>
            <Styled.Controller visible={visible} onClick={() => setVisible(!visible)}>
                <OptionsIcon />
            </Styled.Controller>
            <Styled.Overlay visible={visible}>{children}</Styled.Overlay>
        </Styled.Container>
    );
}
