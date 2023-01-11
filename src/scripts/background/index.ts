import getBlockedPage from '../../helpers/getBlockedPage';
import isBlockedURL from '../../helpers/isBlockedURL';
import { showPopup } from '../../helpers/showPopup';

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
    console.log('## Received message: ');
    console.log(request.data);

    showPopup();

    console.log(sender.tab ? 'from a content script:' + sender.tab.url : 'from the extension');
    if (request.greeting === 'hello') {
        sendResponse({ farewell: 'goodbye' });
        // In the above example, sendResponse() was called synchronously. If you want to asynchronously use sendResponse(), add return true; to the onMessage event handler.
    } else {
        sendResponse({ farewell: 'unknown' });
    }
});
