import { TransactionEvent } from '../types/internal';
import { getActiveTabUrl } from './getActiveTab';

const WALLET_NOTIFICATION_WIDTH = 360;

const EXTENSION_WIDTH = 400;
const EXTENSION_HEIGHT = 550;
const FOCUS_TIMEOUT = 20;
const RETRIES_COUNT = 15;

async function getPosition() {
    const latestWindow = await chrome.windows.getLastFocused();

    if (
        latestWindow.left !== undefined &&
        latestWindow.top !== undefined &&
        latestWindow.width !== undefined &&
        latestWindow.height !== undefined
    ) {
        const top = latestWindow.top;
        const left = latestWindow.left + latestWindow.width - WALLET_NOTIFICATION_WIDTH - EXTENSION_WIDTH;
        return { top, left };
    }

    return { top: 100, left: 100 };
}

async function isMetamaskFocused() {
    const latestWindow = await chrome.windows.getLastFocused();
    const tabs = await chrome.tabs.query({ active: true, windowId: latestWindow.id });
    if (tabs && tabs[0] && tabs[0].title && tabs[0].title.toLowerCase().includes('metamask')) {
        // Found metamask window
        return true;
    }
    return false;
}

function asyncTimeout(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function focusBlockfence(blockfenceWindowId: number) {
    let retries = RETRIES_COUNT;

    // Wait until metamask window is focused
    while (retries > 0) {
        await asyncTimeout(FOCUS_TIMEOUT);
        if (await isMetamaskFocused()) {
            retries = 0;
        }
        retries--;
    }

    chrome.windows.update(blockfenceWindowId, { focused: true });
}

export const showPopup = async (chainId: string, event: TransactionEvent) => {
    const { triggerType, requestType, payload } = event;
    const { top, left } = await getPosition();
    const url = await getActiveTabUrl();

    if (triggerType === 'request' && requestType === 'eth_sendTransaction') {
        const data: Record<string, string> = { url, chainId, ...(payload as Record<string, string>) };
        const searchParams = new URLSearchParams(data);
        const popupUrl = `walletpopup.html?${searchParams.toString()}`;

        // const currentWindow =
        await chrome.windows.getCurrent();
        const popupWindow = await chrome.windows.create({
            url: popupUrl,
            type: 'popup',
            top,
            left,
            width: EXTENSION_WIDTH,
            height: EXTENSION_HEIGHT,
            focused: false, // Wallets code usually position themselves according to latest focused window
        });

        if (popupWindow.id) {
            focusBlockfence(popupWindow.id);
        }
    }
};
