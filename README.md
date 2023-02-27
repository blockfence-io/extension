# Blockfence Browser Extension

**Protecting Web3 Users Against Scams and Frauds - Together**

_Operate safely and securely in the crypto world with Blockfence: An open-source, community-driven browser extension._

Facing crypto scammers alone has become virtually impossible, both for newbies and experienced users.
Blockfence has developed a unique protection layer that combines complex analyses, (patent-pending) machine learning algorithms, the community’s accumulated data, and the ecosystem partner’s input to protect the users of Web3.

You can get the official extension from [Chrome Web Store](https://chrome.google.com/webstore/detail/blockfence/cpgbcelefhmacblaocimfilfnchkghba)

### Features

-   End-to-end protection: Blockfence protects against all methods of fraud - phishing, malicious smart contracts, scam protocols, and more. Thanks to our complex analyses, advanced patent-pending ML algorithms, and data from our partners, we are detecting fraud and scams in all layers, from the blockchain level (layer 1) to the user interface (layer 4)
-   For the community, by the community: Join us and help save you and others from losing funds to scammers. Our core engine becomes smarter with every new user and community member.
-   Collaborative Security: We understand the importance of a united front in safeguarding Web3 users from fraud and scams. That's why we team up with leading security partners to provide the most comprehensive anti-fraud solution. By working together as an ecosystem, we're able to leverage a diversity of perspectives and expertise, ensuring maximum protection for everyone.
-   GPT-based Smart Contract Transaction Interpreter: Understand what your crypto wallet is about to perform, in plain English
-   We value your privacy: Blockfence has no access to your wallet and funds, no need to login, and it takes less than 10 seconds to install and get protected.

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

**Required environment variables**

You must provide a valid `.env` file with the following fields:

```
API_SERVER=
API_KEY=
AMPLITUDE_KEY=<optional>
```

## Release

In order to build a production version:

```
NODE_ENV=production npm run build
```

### Ladle UI Stories

To run Ladle stories:

```
npm run ladle
```

> ### Disclaimer
>
> By adding the free-of-charge beta version of Blockfence to Chrome, you acknowledge that it is provided as a pre-release code and is not at the level of performance or compatibility of a final generally available product offering. This beta version may not operate correctly and may contain defects and may be substantially modified prior to Blockfence first commercial release. Therefore, this beta version is provided “AS IS” and “with all faults” basis, for purposes such as to allow us to obtain feedback on Blockfence performance.
> To the fullest extent permissible by law, we and our directors, officers, employees, agents, advisors, consultants, shareholders, subcontractors and assignees, disclaim all warranties and representations relating to the beta version, express, implied, or statutory, including, but not limited to implied warranties, merchantability, fitness for a particular purpose, quality, reliability, non-infringement, title, compatibility, performance, availability, safety, security, accuracy or completeness with regard to the beta version. Therefore, the entire risk, or at the maximum permitted by the applicable law risk, arising out of the use or performance of the beta version, remains with you and you are advised to safeguard important data, to use caution and not to rely in any way on the correct functioning or performance of the beta version and/or accompanying materials. You hereby acknowledge and bear all responsibility, risks, damages and loss that may be resulted or associated with using the beta version of Blockfence.
