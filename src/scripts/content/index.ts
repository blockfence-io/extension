/*
    This is a content script
    * Content script is accessible to `chorme.runtime` for example.
    * Injected Script runs in the 'page' level and not in the 'content script' level
        * Page can't access the chrome.runtime or other extension API
*/
import { InternalMessage } from '../../types/internal';

// Attach on Page scope
async function injectScript(url: string) {
    const storage = await chrome.storage.local.get('enableHooks');

    if (storage.enableHooks) {
        const script = document.createElement('script');
        script.src = chrome.runtime.getURL(url);
        script.async = false;
        script.type = 'module';

        const node = document.head || document.documentElement;
        node.prepend(script);
    }
}

// Listen for page level events
window.addEventListener(
    'FromPage',
    function (event: CustomEventInit<InternalMessage>) {
        chrome.runtime.sendMessage(event.detail, function (response) {
            console.log(response);
        });
    },
    false
);

/* Inject wallet attach script */
injectScript('attach.bundle.js');
