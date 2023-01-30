import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.8rem;
    color: rgba(0, 0, 0, 0.8);
`;

export const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;

    border-radius: 34px;

    &::before {
        position: absolute;
        content: '';
        height: 12px;
        width: 12px;
        left: 4px;
        bottom: 4px;
        background-color: #1f691f;
        transition: 0.4s;
        border-radius: 50%;
    }
`;

export const SwitchLabel = styled.label`
    position: relative;
    display: inline-block;
    width: 34px;
    height: 20px;

    & input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    & input:checked + ${Slider} {
        background-color: #bcffbc;

        &::before {
            transform: translateX(14px);
        }
    }

    & input:focus + ${Slider} {
        box-shadow: 0 0 1px white;
    }

    & input:disabled + ${Slider} {
        &::before {
            opacity: 0;
        }
    }
`;

interface RadioProps {
    label: string;
    onChange: (value: boolean) => void;
    value: boolean;
    disabled?: boolean;
}

export function Radio({ onChange, value, disabled = false, label }: RadioProps) {
    return (
        <Container>
            <SwitchLabel>
                <input
                    type='checkbox'
                    checked={value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        onChange(e.target.checked);
                    }}
                    disabled={disabled}
                />
                {!disabled && <Slider />}
            </SwitchLabel>
            {label}
        </Container>
    );
}

export default Radio;
