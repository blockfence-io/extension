import { TransactionEvent } from '../scripts/content/types';

export const showPopup = async (event: TransactionEvent) => {
    const { triggerType, requestType, payload } = event;

    if (triggerType === 'request' && requestType === 'eth_sendTransaction') {
        const searchParams = new URLSearchParams(payload as Record<string, string>);
        const popupUrl = `walletpopup.html?${searchParams.toString()}`;
        console.log('Opening popup...');
        console.log(popupUrl);

        const currentWindow = await chrome.windows.getCurrent();
        const popupWindow = await chrome.windows.create({
            url: popupUrl,
            type: 'popup',
            top: 100,
            left: 100,
            width: 400,
            height: 460,
        });
    }
    // window.open("popup.html", "extension_popup", "width=300,height=400,status=no,scrollbars=yes,resizable=no");
};
