export const getEnableHooks = async () => {
    const storage = await chrome.storage.local.get({ enableHooks: true });
    return storage.enableHooks;
};

export const setEnableHooks = async (isEnabled: boolean) => {
    await chrome.storage.local.set({ enableHooks: isEnabled });
};

export const getEnableUrlAnalysis = async () => {
    const storage = await chrome.storage.local.get({ enableUrlAnalysis: true });
    return storage.enableHooks;
};

export const setEnableUrlAnalysis = async (isEnabled: boolean) => {
    await chrome.storage.local.set({ enableUrlAnalysis: isEnabled });
};
