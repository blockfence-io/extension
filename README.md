# Blockfence Browser Extension

Initial extensions version, currently only supports _Chrome_.

## Running on developer mode

In order to run develpoment mode, you should run:

```
npm run dev
```

It should create a `build` folder with the builded plugin.

You can load it to Chrome by:

1. Browse to `chrome://extensions/`
2. Enable **Developer mode**
3. Click on **[Load unpacked]**
4. Choose the `build` folder

## Development Notes

### Background Script

-   A single instance Javascript extension code that handles all of our logic
-   All of our capabilities functions are developed here

Here we can listen to:

-   chrome.webNavigation.onBeforeNavigate

### Content Script

-   Loaded in _each_ website and allows us to manipulate it
-   Sandboxed
-   Can communicate using sendMessage

### See examples

https://github.com/rahulgi/Blacklist/
https://github.com/penge/block-site/
