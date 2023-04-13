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

export const getMutedAddresses = async () => {
    const storage = await chrome.storage.local.get({ mutedAddresses: [] });
    return storage.mutedAddresses;
};

export const addMutedAddresses = async (address: string) => {
    const storage = await chrome.storage.local.get({ mutedAddresses: [] });
    const addresses = storage.mutedAddresses ? storage.mutedAddresses : [];
    addresses.push(address);
    await chrome.storage.local.set({ mutedAddresses: addresses });
};

export const removeMutedAddresses = async (address: string) => {
    const storage = await chrome.storage.local.get({ mutedAddresses: [] });
    const index = storage.mutedAddresses.indexOf(address);
    if (index > -1) {
        storage.mutedAddresses.splice(index, 1);
        await chrome.storage.local.set({ mutedAddresses: storage.mutedAddresses });
    }
};
