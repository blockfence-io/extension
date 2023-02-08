import React from 'react';

import * as Types from '../types/api';
import { Icon } from '@iconscout/react-unicons';
import { Link } from './UI/Link';

import { UilExclamationTriangle, UilExclamationCircle, UilSmile } from '@iconscout/react-unicons';

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

const severityIcons: { [key in Types.Severity]: Icon | undefined } = {
    NONE: undefined,
    LOW: UilSmile,
    MEDIUM: UilExclamationCircle,
    HIGH: UilExclamationTriangle,
    CRITICAL: UilExclamationTriangle,
};

export function Header({ url, network, to, severity }: HeaderProps) {
    const SeverityIcon = severity ? severityIcons[severity] : undefined;
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
            <Styled.Risk severity={severity}>
                {SeverityIcon && <SeverityIcon size='22' />}
                <Styled.RiskText>{severity ? severityTitle[severity] : 'NO RISKS FOUND'}</Styled.RiskText>
            </Styled.Risk>
        </Styled.Container>
    );
}
