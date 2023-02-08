import React, { useState } from 'react';
import { UilPlus, UilMinus } from '@iconscout/react-unicons';
import * as Styled from './Collapsable.styles';

interface CollapsableProps {
    title: string;
    children: React.ReactNode;
    defaultState?: boolean;
}

export function Collapsable({ title, children, defaultState = false }: CollapsableProps) {
    const [visible, setVisible] = useState(defaultState);

    function toggle() {
        setVisible(!visible);
    }

    return (
        <Styled.Container>
            <Styled.Header onClick={toggle}>
                <Styled.Title>{title}</Styled.Title>
                {visible ? <UilMinus size='18' /> : <UilPlus size='18' />}
            </Styled.Header>
            {visible && <Styled.Body>{children}</Styled.Body>}
        </Styled.Container>
    );
}
