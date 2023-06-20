import React, { ReactNode } from 'react';
import { Animate } from 'react-simple-animate';

import { SettingsMenu } from './SettingsMenu';

import ComputerImage from '../assets/computer.svg';
import Logo from '../assets/logo-full-white.svg';

import * as types from '../types/api';
import * as Styled from './Layout.styles';
export { Banner } from './Layout.styles';

type LayoutProps = {
    fullpageMode?: boolean;
    showSettings?: boolean;

    severity?: types.Severity | undefined;

    panel?: ReactNode;
    body?: ReactNode;
    footer?: ReactNode;
};

const severityTitle: { [key in types.Severity]: string } = {
    NONE: 'Low Risk',
    LOW: 'Medium Risk',
    MEDIUM: 'Medium Risk',
    HIGH: 'High Risk',
};

export function Layout({ panel, body, footer, severity, fullpageMode = false, showSettings = true }: LayoutProps) {
    return (
        <Styled.Container>
            <Styled.Background severity={severity}>
                <Header showSettings={showSettings} />
                {/* <AnimateGroup play={fullpageMode}> */}
                <AnimatedComputerImage isVisible={fullpageMode} />
                <AnimatedPanelHeader severity={severity} />
                {/* </AnimateGroup> */}
                <Styled.PanelBackground>
                    <Styled.Panel>{panel || ''}</Styled.Panel>
                </Styled.PanelBackground>
            </Styled.Background>

            <Styled.Body>{body}</Styled.Body>
            {footer && <Styled.Footer>{footer}</Styled.Footer>}
        </Styled.Container>
    );
}

function AnimatedComputerImage({ isVisible }: { isVisible: boolean }) {
    return (
        <Animate
            play={isVisible}
            // sequenceIndex={0}
            start={{
                opacity: 1,
                filter: 'blur(0)',
                scale: '1',
                height: '150px',
                transform: 'translate(0, 0)',
                alignSelf: 'center',
            }}
            end={{
                opacity: 0,
                filter: 'blur(10px)',
                scale: '1',
                height: '0px',
                transform: 'translate(0px, -100px)',
                alignSelf: 'center',
            }}
            easeType='cubic-bezier(0.445, 0.05, 0.55, 0.95)'
        >
            <ComputerImage id='computer' />
        </Animate>
    );
}

function AnimatedPanelHeader({ severity }: { severity?: types.Severity }) {
    const title = severity ? severityTitle[severity] : '\u00A0';
    return (
        <Animate
            play={!!severity}
            // sequenceIndex={1}
            end={{
                opacity: 1,
                transform: 'translate(0, 0)',
                alignSelf: 'center',
            }}
            start={{
                opacity: 0,
                transform: 'translate(0px, 120px)',
                alignSelf: 'center',
            }}
            easeType='cubic-bezier(0.445, 0.05, 0.55, 0.95)'
        >
            <Styled.PanelHeader severity={severity}>{title}</Styled.PanelHeader>
        </Animate>
    );
}

type HeaderProps = {
    showSettings: boolean;
};

export function Header({ showSettings }: HeaderProps) {
    return (
        <Styled.Header>
            <Logo />
            {showSettings && <SettingsMenu />}
        </Styled.Header>
    );
}
