function injectScript(url: string) {
    const script = document.createElement('script');
    script.src = chrome.runtime.getURL(url);
    script.async = false;
    script.type = 'module';

    const node = document.head || document.documentElement;
    node.prepend(script);
}

injectScript('attach.bundle.js');
