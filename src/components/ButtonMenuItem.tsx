import React from 'react';
import * as Styled from '../components/UI/Menu.styles';

export interface MenuItemProps {
    title: string;
    onClick: () => Promise<void>;
}

export function ButtonMenuItem({ title, onClick }: MenuItemProps) {
    return (
        <Styled.Button onClick={onClick} type='button'>
            {title}
        </Styled.Button>
    );
}
