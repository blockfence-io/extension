import React, { useState } from 'react';

import * as Styled from './Collapsable.styles';

interface CollapsableProps {
    title: string;
    children: React.ReactNode;
    defaultState?: boolean;
}

export function Collapsable({ title, children, defaultState = true }: CollapsableProps) {
    const [visible, setVisible] = useState(defaultState);

    function toggle() {
        setVisible(!visible);
    }

    return (
        <Styled.Container>
            <Styled.Header onClick={toggle}>
                <Styled.Title>{title}</Styled.Title>
                <Styled.Icon>{visible ? '-' : '+'}</Styled.Icon>
            </Styled.Header>
            {visible && <Styled.Body>{children}</Styled.Body>}
        </Styled.Container>
    );
}
