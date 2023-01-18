/* eslint-disable @typescript-eslint/ban-ts-comment */
import detectEthereumProvider from '@metamask/detect-provider';
import { JsonRpcRequest, JsonRpcCallback, ProviderRequest, TransactionEvent } from '../../types/jsonrpc';
import { ExternalProvider } from '@ethersproject/providers';

function triggerBlockfence(triggerType: string, requestType: string, payload: unknown) {
    const message: TransactionEvent = {
        triggerType,
        requestType,
        payload,
    };
    const event = new CustomEvent('FromPage', { detail: message });
    window.dispatchEvent(event);
}

function wrapSend(provider: ExternalProvider) {
    if (!provider.send) return;
    const originalSend = provider.send;

    // Send can be overloaded (https://docs.metamask.io/guide/ethereum-provider.html#legacy-methods)
    const send = (requestOrMethod: unknown, callbackOrParams: unknown) => {
        // "request" like overloading: payloadOrMethod is method  and callbackOrParams is params
        if (typeof requestOrMethod === 'string') {
            // Same handler as request
            const method = requestOrMethod as string;
            const params = callbackOrParams as Array<unknown>;
            if (method === 'eth_sendTransaction') {
                triggerBlockfence('request', method, params[0]);
            }
        }

        const request = requestOrMethod as JsonRpcRequest<Array<unknown>>;
        // const callback = callbackOrParams as JsonRpcCallback<unknown, unknown>;

        // "sendAsync" like overloading
        if (callbackOrParams) {
            if (request.method === 'eth_sendTransaction') {
                const payloadParams = request.params as Array<unknown>;
                triggerBlockfence('request', request.method, payloadParams[0]);
            }
        }

        // Third case doesn't supports transaction, make sure it's ok to leave as is
        const unsupportedMethods = ['eth_accounts', 'eth_coinbase', 'eth_uninstallFilter', 'net_version'];
        if (request.method && !unsupportedMethods.includes(request.method)) {
            console.log('@ Unsupported method/usage of send found');
        }

        // @ts-ignore
        return originalSend(requestOrMethod, callbackOrParams);
    };

    // @ts-ignore
    provider.send = send;
}

function wrapSendAsync(provider: ExternalProvider) {
    if (!provider.sendAsync) return;
    const originalSendAsync = provider.sendAsync;

    const sendAsync = (payload: JsonRpcRequest<Array<unknown>>, callback: JsonRpcCallback<unknown, unknown>) => {
        if (payload.method === 'eth_sendTransaction') {
            const payloadParams = payload.params as Array<unknown>;
            triggerBlockfence('request', payload.method, payloadParams[0]);
        }
        return originalSendAsync(payload, callback);
    };

    // @ts-ignore
    provider.sendAsync = sendAsync;
}

function wrapRequest(provider: ExternalProvider) {
    if (!provider.request) return;

    const originalRequest = provider.request;
    const request: ProviderRequest<unknown[] | undefined> = (request) => {
        if (request.method === 'eth_sendTransaction') {
            const payload = request.params as Array<unknown>;
            triggerBlockfence('request', request.method, payload[0]);
        }
        return originalRequest(request);
    };

    // @ts-ignore
    provider.request = request;
}

async function attach() {
    const provider = await detectEthereumProvider();

    if (provider) {
        wrapSend(provider);
        wrapSendAsync(provider);
        wrapRequest(provider);
    } else {
        console.log('@ No wallet found');
    }
}

console.log('@@ Blockfence is Loading');
window.addEventListener('load', attach);
