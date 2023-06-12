import * as storage from '../shared/storage';

export async function getActiveTabUrl() {
    if (!chrome || !chrome.tabs || !chrome.tabs.query) {
        return '';
    }
    let url = '';
    if (await storage.getEnableUrlAnalysis()) {
        const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
        if (tabs.length > 0) {
            url = tabs[0].url || '';
        }
    }
    return url;
}
