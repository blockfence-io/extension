import React, { useState } from 'react';
import * as Styled from './Radio.styles';

interface RadioProps {
    label?: undefined | string;
    onChange: (value: boolean) => void;
    checked: boolean;
}

export function Radio({ onChange, checked, label }: RadioProps) {
    function toggle() {
        onChange(!checked);
    }

    return (
        <Styled.Container tabIndex={0} onClick={toggle}>
            <Styled.FakeRadio checked={checked} />
            <Styled.Label>{label}</Styled.Label>
        </Styled.Container>
    );
}

export interface RadioOption {
    key: string | number;
    title: string;
}

interface RadioGroupProps {
    options: RadioOption[];
    selected: string | number;
    onChange: (value: string | number) => void;
}

export function RadioGroup({ selected, onChange, options }: RadioGroupProps) {
    return (
        <Styled.GroupContainer>
            {options.map((option) => (
                <Radio
                    key={option.key}
                    label={option.title}
                    checked={selected == option.key}
                    onChange={() => onChange(option.key)}
                />
            ))}
        </Styled.GroupContainer>
    );
}
