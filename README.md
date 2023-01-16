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
-   Here we can listen to: `chrome.webNavigation.onBeforeNavigate`

### Content Script

-   Loaded in _each_ website and allows us to manipulate it
-   Sandboxed
-   Can communicate using sendMessage
-   Monitors ethereum wallet

## Extension Roadmap

### Phishing Protection

1. Add local blocklist cache

2. Add 'ignore and open website anyway' capability

3. Update local cache with popular predefined list

4. Limit detection to Blockchain related website (can we identify blockchain api usage?)

5. When server is down - make sure no impact occurres and a some user warning is shown ("blockfence is temporary down")

6. Code cleanup

7. Security: Understand cache access and who can update/remove it?

8. Security Auditing

### Wallet Protection

1. Create a mechanism to transmit all tx data, not through get parameters

2. Fix window positioning

3. Send tx address to backend

4. Security Auditing

### Extension Settings

TBD
