import { TransactionEvent } from '../types/jsonrpc';

export const showPopup = async (event: TransactionEvent) => {
    const { triggerType, requestType, payload } = event;

    if (triggerType === 'request' && requestType === 'eth_sendTransaction') {
        const searchParams = new URLSearchParams(payload as Record<string, string>);
        const popupUrl = `walletpopup.html?${searchParams.toString()}`;

        // const currentWindow =
        await chrome.windows.getCurrent();
        // const popupWindow =
        await chrome.windows.create({
            url: popupUrl,
            type: 'popup',
            top: 100,
            left: 100,
            width: 400,
            height: 460,
        });
    }
};
