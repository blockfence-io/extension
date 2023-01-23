import { TransactionEvent } from '../types/jsonrpc';

const WALLET_NOTIFICATION_WIDTH = 360;

const EXTENSION_WIDTH = 400;
const EXTENSION_HEIGHT = 460;
const FOCUS_TIMEOUT = 200;

async function getPosition() {
    // Get opening page position
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

export const showPopup = async (event: TransactionEvent) => {
    const { triggerType, requestType, payload } = event;

    const { top, left } = await getPosition();

    if (triggerType === 'request' && requestType === 'eth_sendTransaction') {
        const searchParams = new URLSearchParams(payload as Record<string, string>);
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

        // Make sure popup window is focused
        setTimeout(() => {
            if (popupWindow.id) {
                chrome.windows.update(popupWindow.id, { focused: true });
            }
        }, FOCUS_TIMEOUT);
    }
};
