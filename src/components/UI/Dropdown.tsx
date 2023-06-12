import React, { ReactNode, useState } from 'react';
import * as Styled from './Dropdown.styles';

export interface DropdownOption {
    key: string;
    title: string;
    icon?: ReactNode;
}

interface NetworkSelectorProps {
    title?: string;
    placeholder?: string;
    options: DropdownOption[];
    onChange: (value: string) => void;
    value?: string;
}

export function Dropdown({ options, onChange, value, title, placeholder }: NetworkSelectorProps) {
    const [hidden, setHidden] = useState(true);
    const currentOption = options.find((option) => option.key === value);

    return (
        <Styled.Container>
            {title && <Styled.Title>{title}</Styled.Title>}
            {!hidden && (
                <Styled.OptionsSelector>
                    {options.map((option) => (
                        <Styled.Option
                            key={option.key}
                            onClick={() => {
                                setHidden(true);
                                onChange(option.key);
                            }}
                        >
                            {option.icon && <Styled.Icon>{option.icon}</Styled.Icon>}
                            {option.title}
                        </Styled.Option>
                    ))}
                </Styled.OptionsSelector>
            )}
            <Styled.Selected
                checked={!hidden}
                onClick={() => {
                    setHidden(!hidden);
                }}
            >
                {currentOption ? (
                    <>
                        <Styled.SmallIcon>{currentOption.icon}</Styled.SmallIcon>
                        <Styled.OptionTitle>{currentOption.title}</Styled.OptionTitle>
                    </>
                ) : (
                    <Styled.Placeholder>{placeholder}</Styled.Placeholder> || ' '
                )}
            </Styled.Selected>
        </Styled.Container>
    );
}
