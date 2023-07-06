import { SupportedNetworks } from '../types/networks';

export const getEnableHooks = async () => {
    const storage = await chrome.storage.local.get({ enableHooks: true });
    return storage.enableHooks;
};

export const setEnableHooks = async (isEnabled: boolean) => {
    await chrome.storage.local.set({ enableHooks: isEnabled });
};

export const getEnableUrlAnalysis = async () => {
    const storage = await chrome.storage.local.get({ enableUrlAnalysis: true });
    return storage.enableUrlAnalysis;
};

export const setEnableUrlAnalysis = async (isEnabled: boolean) => {
    await chrome.storage.local.set({ enableUrlAnalysis: isEnabled });
};

export const isMutedAddresses = async (address: string, chainId: string, domain: string) => {
    const storage = await chrome.storage.local.get({ mutedAddresses: {} });
    return storage.mutedAddresses[txID(address, chainId, domain)];
};

export const txID = (address: string, chainId: keyof typeof SupportedNetworks, domain: string) =>
    `${address}-${chainId}-${domain}`;
export const mutedAddressesKey = 'mutedAddresses';

export const getPrefferedChinId = async () => {
    const storage = await chrome.storage.local.get({ preferredChainId: '1' });
    return storage.preferredChainId;
};

export const setPreferredChainId = async (chainId: string) => {
    await chrome.storage.local.set({ preferredChainId: chainId });
};
