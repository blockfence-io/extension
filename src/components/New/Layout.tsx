import React, { ReactNode } from 'react';
import { Animate, AnimateGroup } from 'react-simple-animate';

import { SettingsMenu } from '../../components/SettingsMenu';

import ComputerImage from '../../assets/computer.svg';
import Logo from '../../assets/logo-full-white.svg';
// import ComputerImagePng from '../../assets/computer.png';

import * as types from '../../types/api';
import * as Styled from './Layout.styles';

export { Panel } from './Layout.styles';

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
    HIGH: 'High Risk',
};

export function Layout({ fullpageMode = false, showSettings = true, severity, panel, body, footer }: LayoutProps) {
    return (
        <Styled.Container>
            <Styled.Background severity={severity}>
                <Header showSettings={showSettings} />
                <AnimateGroup play={fullpageMode}>
                    <AnimatedComputerImage />
                    <AnimatedPanelHeader severity={severity} isVisible={!fullpageMode} />
                </AnimateGroup>
                <Styled.PanelBackground>
                    <Styled.Panel>{panel || ''}</Styled.Panel>
                </Styled.PanelBackground>
            </Styled.Background>

            {body && <Styled.Body>{body}</Styled.Body>}
            {footer && <Styled.Footer>{footer}</Styled.Footer>}
        </Styled.Container>
    );
}

function AnimatedComputerImage() {
    return (
        <Animate
            // play={isVisible}
            sequenceIndex={0}
            start={{
                opacity: 1,
                filter: 'blur(0)',
                scale: '1',
                height: '280px',
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

function AnimatedPanelHeader({ isVisible, severity }: { isVisible: boolean; severity?: types.Severity }) {
    const title = severity ? severityTitle[severity] : '';
    return (
        <Animate
            // play={isVisible}
            sequenceIndex={0}
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
