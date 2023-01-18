import { showPopup } from '../../helpers/showPopup';
import { TransactionEvent } from '../../types/jsonrpc';

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    const payload: TransactionEvent = request;
    showPopup(payload);

    sendResponse({ status: 'ok' });
});
