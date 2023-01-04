import getBlockedPage from '../../helpers/getBlockedPage';
import isBlockedURL from '../../helpers/isBlockedURL';

// chrome.runtime.onInstalled.addListener(() => {
// });

chrome.webNavigation.onBeforeNavigate.addListener((details) => {
    const { tabId, url, timeStamp, frameId } = details;
    if (!url || !url.startsWith('http') || frameId !== 0) {
        return;
    }

    console.log('>> Navigating to: ', details);

    if (isBlockedURL(url)) {
        chrome.tabs.update(tabId, {
            url: getBlockedPage({ url }),
        });
    }

    // fetch('https://testbffa.free.beeceptor.com/slow')
    //     .then(function (response) {
    //         console.log('Received response!!!');
    //         if (url.includes('facebook.com')) {
    //             chrome.tabs.update(tabId, {
    //                 // url: getBlockedUrl({
    //                 //     rule: foundRule.path,
    //                 //     countParams: counterShow ? { count, period: counterPeriod } : undefined,
    //                 // }),
    //                 url: chrome.runtime.getURL('blocked.html'),
    //             });
    //         }
    //     })
    //     .catch(function (err) {
    //         console.log('@@ Error!!!');
    //     });
});
