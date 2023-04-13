import React from 'react';
import * as Menu from '../components/UI/Menu';
import * as Styled from '../components/UI/Menu.styles';

export interface MenuItemProps {
    title: string;
    body: string;
    onClick: () => Promise<void>;
}

export function ButtonMenuItem({ title, body, onClick }: MenuItemProps) {
    return (
        <>
            <Styled.Button>
                <button onClick={onClick}>{title}</button>
            </Styled.Button>
            <Menu.Body>{body}</Menu.Body>
        </>
    );
}
