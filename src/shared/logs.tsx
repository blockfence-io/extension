import { init } from '@amplitude/analytics-browser';
import * as amplitude from '@amplitude/analytics-browser';

const APP_VERSION =
    typeof chrome !== 'undefined' && chrome.runtime ? chrome.runtime.getManifest().version : 'standalone';

init(process.env.AMPLITUDE_KEY || '', undefined, {
    appVersion: APP_VERSION,
});

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

export function logSettingsToggled(name: string, enable: boolean) {
    const eventProperties = {
        enable: enable,
    };
    amplitude.track('Toggle Settings ' + name, eventProperties);
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

export function logAddressSearchClick(to: string, chainId: string) {
    const eventProperties = {
        to,
        chainId,
    };
    logButtonClick('Search-Address', eventProperties);
}

export function logUrlSearchClick(url: string) {
    const eventProperties = {
        url,
    };
    logButtonClick('Search-URL', eventProperties);
}

export function logButtonClick(name: string, properties: object) {
    amplitude.track(name + ' Button Clicked', properties);
}

export function logToggleMute(isMute: boolean | undefined, properties: object) {
    const state = isMute ? 'ON' : 'OFF';
    amplitude.track(' Mute toggle ' + state, properties);
}

export function logClearMutedTxsClick() {
    amplitude.track('Muted Txs Cleared');
}

export function logCriticalError(error: Error) {
    console.log({ message: error.message, stack: error.stack?.toString() });
    amplitude.track('Render Crash', { message: error.message, stack: error.stack?.toString() });
}
