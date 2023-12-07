import { questStatus } from '../shared/api';
import { getEnableHooks, getPromotionCounter, isMutedAddresses, setPromotionCounter } from '../shared/storage';
import { TransactionEvent } from '../types/internal';
import { getActiveTabUrl } from './getActiveTab';

const WALLET_NOTIFICATION_WIDTH = 360;

const EXTENSION_WIDTH = 400;
const EXTENSION_HEIGHT = 600;
const FOCUS_TIMEOUT = 20;
const RETRIES_COUNT = 25;

const REQUIRED_PROMOTION_COUNT = 5;

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

async function findMetamaskWindowId() {
    const latestWindow = await chrome.windows.getLastFocused();
    const tabs = await chrome.tabs.query({ active: true, windowId: latestWindow.id });
    if (tabs && tabs[0] && tabs[0].title && tabs[0].title.toLowerCase().includes('metamask')) {
        return latestWindow.id;
    }
}

function asyncTimeout(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForMetamaskWindowId() {
    let retries = RETRIES_COUNT;

    // Wait until metamask window is focused
    while (retries > 0) {
        await asyncTimeout(FOCUS_TIMEOUT);
        const metamaskWindowId = await findMetamaskWindowId();
        if (metamaskWindowId) {
            return metamaskWindowId;
        }
        retries--;
    }
}

export const showPopup = async (chainId: string, event: TransactionEvent) => {
    const { triggerType, requestType, payload } = event;

    if (triggerType === 'request' && requestType === 'eth_sendTransaction') {
        // Runtime verification in case someone disabled the hook without reload window
        const address = (payload as Record<string, string>).to;
        const url = await getActiveTabUrl();
        const enabled = await shouldShowPopup(address, chainId, url);
        if (!enabled) return;

        const { top, left } = await getPosition();

        const data: Record<string, string> = { url, chainId, ...(payload as Record<string, string>) };
        const searchParams = new URLSearchParams(data);
        const popupUrl = `walletpopup.html?${searchParams.toString()}`;

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
            // Wait until wallet window is found (or timeout)
            const walletWindowId = await waitForMetamaskWindowId();

            // Listen to wallet close
            if (walletWindowId) closeWindowWithOther(popupWindow.id, walletWindowId);

            // Focus Blockfence window
            chrome.windows.update(popupWindow.id, { focused: true });
        }

        // const currentWindow =
        showPromotion();
    }
};

export const showPromotion = async () => {
    const promotionCounter = await getPromotionCounter();
    setPromotionCounter(promotionCounter + 1);

    if (promotionCounter !== REQUIRED_PROMOTION_COUNT) {
        return;
    }

    // Check if promotion is available
    try {
        const status = await questStatus(promotionCounter);
        if (!status.active) return;
    } catch (error) {
        return;
    }

    const popupUrl = 'promotion.html';
    const { top, left } = await getPosition();

    await chrome.windows.create({
        url: popupUrl,
        type: 'popup',
        top,
        left,
        width: EXTENSION_WIDTH,
        height: EXTENSION_HEIGHT,
        focused: true,
    });
};

function closeWindowWithOther(targetWindowId: number, listeningWindowId: number) {
    function handler(tabId: number, removeInfo: chrome.tabs.TabRemoveInfo) {
        if (removeInfo.windowId === listeningWindowId) {
            chrome.windows.remove(targetWindowId);
            chrome.tabs.onRemoved.removeListener(handler);
        }
    }

    chrome.tabs.onRemoved.addListener(handler);
}

async function shouldShowPopup(address: string, chainId: string, domain: string) {
    const enabled = await getEnableHooks();
    if (!enabled) return false;

    return !(await isMutedAddresses(address, chainId, domain));
}
