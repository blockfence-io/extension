import React from 'react';
import * as Styled from './Tabs.styles';

export interface TabOptions {
    key: string;
    title: string;
}

interface TabsProps {
    options: TabOptions[];
    selected: string;
    onChange: (value: string) => void;
}

export function Tabs({ options, onChange, selected }: TabsProps) {
    return (
        <Styled.Container>
            {options.map((option) => (
                <Styled.Option
                    type='button'
                    selected={option.key === selected}
                    key={option.key}
                    onClick={() => onChange(option.key)}
                >
                    {option.title}
                </Styled.Option>
            ))}
        </Styled.Container>
    );
}
