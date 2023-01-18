import getBlockedPage from '../../helpers/getBlockedPage';
import isBlockedURL from '../../helpers/isBlockedURL';
import { showPopup } from '../../helpers/showPopup';

import { TransactionEvent } from '../../types/jsonrpc';

// URL Blocking Listener
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

/* Listening to single messages (UDP like) */
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log('[Background Script] Received message: ');
    console.log(request);

    const payload: TransactionEvent = request;
    showPopup(payload);

    sendResponse({ status: 'ok' });
});
