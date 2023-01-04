import getBlockedPage from '../../helpers/getBlockedPage';
import isBlockedURL from '../../helpers/isBlockedURL';

chrome.webNavigation.onBeforeNavigate.addListener((details) => {
    const { tabId, url, frameId } = details;

    // (frameId !== 0) only on navigation in internal iframes (currently we won't track them)
    if (!url || !url.startsWith('http') || frameId !== 0) {
        return;
    }

    if (isBlockedURL(url)) {
        chrome.tabs.update(tabId, {
            url: getBlockedPage({ url }),
        });
    }
});
