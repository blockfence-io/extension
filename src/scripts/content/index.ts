/*
    This is a content script
    * Content script is accessible to `chorme.runtime` for example.
    * Injected Script runs in the 'page' level and not in the 'content script' level
        * Page can't access the chrome.runtime or other extension API
*/
import { TransactionEvent } from '../../types/jsonrpc';

// Attach on Page scope
function injectScript(url: string) {
    const script = document.createElement('script');
    script.src = chrome.runtime.getURL(url);
    script.async = false;
    script.type = 'module';

    const node = document.head || document.documentElement;
    node.prepend(script);
}

// Listen for page level events
window.addEventListener(
    'FromPage',
    function (event: CustomEventInit<TransactionEvent>) {
        chrome.runtime.sendMessage(event.detail, function (response) {
            console.log(response);
        });
    },
    false
);

/* Inject wallet attach script */
injectScript('attach.bundle.js');
