import { showPopup } from '../../helpers/showPopup';
import { InternalMessage, InternalMessageType, TransactionEvent, UpdateChainIDEvent } from '../../types/internal';

chrome.runtime.onMessage.addListener(async function (request, sender, sendResponse) {
    const message: InternalMessage = request;

    if (message.type === InternalMessageType.TransactionEvent) {
        const storageRequest = await chrome.storage.local.get('chainId');
        showPopup(storageRequest.chainId, message.event as TransactionEvent);
    }

    if (message.type === InternalMessageType.UpdateChainIDEvent) {
        const event: UpdateChainIDEvent = message.event as UpdateChainIDEvent;
        chrome.storage.local.set({ chainId: event.chainId });
    }

    sendResponse({ status: 'ok' });
});
