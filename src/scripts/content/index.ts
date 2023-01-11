/*
    This is a content script
    * Content script is accessible to `chorme.runtime` for example.
    * Injected Script runs in the 'page' level and not in the 'content script' level
        * Page can't access the chrome.runtime or other extension API
*/

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
    function (evt) {
        console.log('Wallet triggered an event');
        console.log(chrome.runtime);
        chrome.runtime.sendMessage({ data: 'Hello from content script!' }, function (response) {
            console.log(response);
        });
    },
    false
);

/* Inject wallet attach script */
injectScript('attach.bundle.js');
