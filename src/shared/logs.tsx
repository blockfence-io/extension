import { init } from '@amplitude/analytics-browser';
import * as amplitude from '@amplitude/analytics-browser';

init('cad0450cba5bd31153ac7136f375f193');

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
