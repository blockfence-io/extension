import detectEthereumProvider from '@metamask/detect-provider';

console.log('### Loaded script:');

async function load() {
    const provider = await detectEthereumProvider();

    if (provider) {
        // From now on, this should always be true:
        // provider === window.ethereum
        console.log('@@@@ Found provider');
        console.log(provider);
        console.log(window.ethereum);
        console.log(window.ethereum.request);
    } else {
        console.log('Please install MetaMask!');
        console.log(document.getElementById('interpretation-and-definitions'));
    }
}

console.log('@@ Blockfence is Loading');
window.addEventListener('load', load);
