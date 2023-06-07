import React from 'react';
import * as Styled from './Toggle.styles';

interface ToggleProps {
    label?: undefined | string;
    onChange: (value: boolean) => void;
    value: boolean;
    disabled?: boolean;
}

export function Toggle({ onChange, value, disabled = false, label }: ToggleProps) {
    return (
        <Styled.Container>
            <Styled.SwitchLabel>
                <input
                    type='checkbox'
                    checked={value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        onChange(e.target.checked);
                    }}
                    disabled={disabled}
                />
                {!disabled && <Styled.Slider />}
            </Styled.SwitchLabel>
            {label}
        </Styled.Container>
    );
}

export default Toggle;
