import React from 'react';

import * as Types from '../types/api';
import { Link } from './UI/Link';

import * as Styled from './Header.styles';

interface HeaderProps {
    network: string;
    to: string;
    url?: string | undefined;
    severity?: Types.Severity | undefined;
}

const severityTitle: { [key in Types.Severity]: string } = {
    NONE: 'No risks found',
    LOW: 'Low Risk',
    MEDIUM: 'Medium Risk',
    HIGH: 'High Risk',
    CRITICAL: 'Critical Risk',
};

export function Header({ url, network, to, severity }: HeaderProps) {
    return (
        <Styled.Container severity={severity}>
            {url && (
                <Link href={url} target='_blank' rel='noreferrer'>
                    {url}
                </Link>
            )}

            <Styled.InfoList>
                <Styled.Info.Group>
                    <Styled.Info.Title>Network</Styled.Info.Title>
                    <Styled.Info.Value>{network}</Styled.Info.Value>
                </Styled.Info.Group>
                <Styled.Info.Group>
                    <Styled.Info.Title>Contract address</Styled.Info.Title>
                    <Styled.Info.Value>{to}</Styled.Info.Value>
                </Styled.Info.Group>
            </Styled.InfoList>

            <Styled.Fill />
            <Styled.Risk severity={severity}>{severity ? severityTitle[severity] : 'NO RISKS FOUND'}</Styled.Risk>
        </Styled.Container>
    );
}
