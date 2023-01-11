export const showPopup = async () => {
    const currentWindow = await chrome.windows.getCurrent();
    const popupWindow = await chrome.windows.create({
        url: `walletpopup.html`,
        type: 'popup',
        top: 100,
        left: 100,
        width: 480,
        height: 500,
    });
};
