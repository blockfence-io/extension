# Blockfence Browser Extension

This Chrome extension allows users to decode and understand a blockchain smart contract.

The extension is automatically triggered on each transaction and shows a popup with a detailed description of the transaction's contract.

Additionally, you can manually query our platform by cliking on the extension icon.

You can get the official extension from [Chrome Web Store](https://chrome.google.com/webstore/category/extensions)

## Developers Mode

You can run the extensions in a development mode by running the following command:

```
npm run dev
```

It should create a `build` folder with the builded plugin.

You can load it to Chrome by:

1. Browse to `chrome://extensions/`
2. Enable **Developer mode**
3. Click on **[Load unpacked]**
4. Choose the `build` folder
