/* eslint-disable @typescript-eslint/ban-ts-comment */
import detectEthereumProvider from '@metamask/detect-provider';
import { JsonRpcRequest, JsonRpcCallback, ProviderRequest } from './types';
import { ExternalProvider } from '@ethersproject/providers';

function wrapSend(provider: ExternalProvider) {
    if (!provider.send) return;
    const originalSend = provider.send;

    // Send can be overloaded (https://docs.metamask.io/guide/ethereum-provider.html#legacy-methods)
    const send = (payloadOrMethod: any, callbackOrParams: any) => {
        // "request" like overloading: payloadOrMethod is method  and callbackOrParams is params
        if (typeof payloadOrMethod === 'string') {
            // TBD: Same handler as request
            console.log('## Request Wrapper - Method', payloadOrMethod);
            console.log('## Request Wrapper - Params', callbackOrParams);
        }

        // "sendAsync" like overloading
        if (callbackOrParams) {
            // TBD: same handles as sendAsync
            console.log('## Send Async - Method', payloadOrMethod.method);
            console.log('## Send Async - Params', payloadOrMethod.params);
        }

        // Third case doesn't supports transaction, make sure it's ok to leave as is
        const unsupportedMethods = ['eth_accounts', 'eth_coinbase', 'eth_uninstallFilter', 'net_version'];
        if (payloadOrMethod.method && !unsupportedMethods.includes(payloadOrMethod.method)) {
            console.log('@ Unsupported method/usage of send found');
        }

        // @ts-ignore
        return originalSend(...rest);
    };

    // @ts-ignore
    provider.send = send;
}

function wrapSendAsync(provider: ExternalProvider) {
    if (!provider.sendAsync) return;
    const originalSendAsync = provider.sendAsync;

    const sendAsync = (payload: JsonRpcRequest<Array<any>>, callback: JsonRpcCallback<unknown, unknown>) => {
        console.log('## Send Async - Method', payload.method);
        console.log('## Send Async - Params', payload.params);
        return originalSendAsync(payload, callback);
    };

    // @ts-ignore
    provider.sendAsync = sendAsync;
}

function wrapRequest(provider: ExternalProvider) {
    if (!provider.request) return;

    const originalRequest = provider.request;
    const request: ProviderRequest<any[] | undefined> = (request) => {
        console.log('## Request Wrapper - Method', request.method);
        console.log('## Request Wrapper - Params', request.params);
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
        console.log('Please install MetaMask!');
        console.log(document.getElementById('interpretation-and-definitions'));
    }
}

console.log('@@ Blockfence is Loading');
window.addEventListener('load', attach);
