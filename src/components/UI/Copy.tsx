import React, { useState } from 'react';
import styled from 'styled-components';

import { UilCopy, UilCheck } from '@iconscout/react-unicons';
import copy from 'copy-to-clipboard';

interface CopyProps {
    text: string;
    size?: string | number;
    children?: React.ReactNode;
}

export const Span = styled.span`
    user-select: none;
    cursor: pointer;

    & svg {
        vertical-align: bottom;
        margin-right: 4px;
    }

    opacity: 0.8;
    &:hover {
        text-decoration: underline;
        opacity: 1;
    }
`;

export function Copy({ text, size = '14', children }: CopyProps) {
    const [completed, setCompleted] = useState(false);

    function copyToClipboard() {
        copy(text);
        setCompleted(true);

        setTimeout(() => {
            setCompleted(false);
        }, 1000);
    }

    return (
        <Span onClick={copyToClipboard}>
            {completed ? <UilCheck size={size} /> : <UilCopy size={size} />}
            {children}
        </Span>
    );
}
