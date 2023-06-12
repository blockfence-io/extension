import React, { useState } from 'react';
import { useCollapse } from 'react-collapsed';

import { UilAngleDown, UilAngleUp } from '@iconscout/react-unicons';

import * as Styled from './Collapsable.styles';

interface CollapsableProps {
    icon?: React.ReactNode | undefined;
    title: string;
    subtitle?: string;
    children: React.ReactNode;
    defaultState?: boolean;
}

export function Collapsable({ title, subtitle, children, icon, defaultState = false }: CollapsableProps) {
    const [isExpanded, setExpanded] = useState(defaultState);
    const { getCollapseProps } = useCollapse({ isExpanded });

    function toggle() {
        setExpanded(!isExpanded);
    }

    return (
        <Styled.Panel>
            <Styled.Header onClick={toggle}>
                {icon && <Styled.Icon type='normal'>{icon}</Styled.Icon>}
                <Styled.Multiline>
                    <Styled.Title>{title}</Styled.Title>
                    {subtitle && <Styled.Subtitle>{subtitle}</Styled.Subtitle>}
                </Styled.Multiline>
                <Styled.Accessory>
                    {isExpanded ? <UilAngleDown size='22' /> : <UilAngleUp size='22' />}
                </Styled.Accessory>
            </Styled.Header>
            <Styled.Body {...getCollapseProps()}>{children}</Styled.Body>
        </Styled.Panel>
    );
}
