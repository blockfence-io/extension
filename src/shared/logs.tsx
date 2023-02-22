import { init } from '@amplitude/analytics-browser';
import * as amplitude from '@amplitude/analytics-browser';

init(process.env.AMPLITUDE_KEY || '');

export function logException(error: unknown) {
    amplitude.logEvent('Exception', {
        error,
    });
}

export function logNetworkChange(network: string) {
    const eventProperties = {
        network: network,
    };
    amplitude.track('Network Change', eventProperties);
}

export function logToggleActiveMode(enable: boolean) {
    const eventProperties = {
        enable: enable,
    };
    amplitude.track('Toggle Active Mode', eventProperties);
}

export function logSettingsMenuClick() {
    amplitude.track('Settings Menu Clicked');
}

export function logPageView(name: string) {
    const eventProperties = {
        name: name,
    };
    amplitude.track('Page View', eventProperties);
}

export function logSearchClick(to: string, chainId: string) {
    const eventProperties = {
        to: to,
        chainId: chainId,
    };
    logButtonClick('Search', eventProperties);
}

export function logButtonClick(name: string, properties: object) {
    amplitude.track(name + ' Button Clicked', properties);
}

export function logCriticalError(error: Error) {
    console.log({ message: error.message, stack: error.stack?.toString() });
    amplitude.track('Render Crash', { message: error.message, stack: error.stack?.toString() });
}
