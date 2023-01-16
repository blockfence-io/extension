// // import { ProviderMessage, ProviderRpcError, ProviderConnectInfo, RequestArguments } from 'hardhat/types';

// // export interface EthereumEvent {
// //     connect: ProviderConnectInfo;
// //     disconnect: ProviderRpcError;
// //     accountsChanged: Array<string>;
// //     chainChanged: string;
// //     message: ProviderMessage
// // }

// // type EventKeys = keyof EthereumEvent;
// // type EventHandler<K extends EventKeys> = (event: EthereumEvent[K]) => void;

// export interface Ethereumish {
//     autoRefreshOnNetworkChange: boolean;
//     chainId: string;
//     isMetaMask?: boolean;
//     isStatus?: boolean;
//     networkVersion: string;
//     selectedAddress: any;
//     host?: string;
//     path?: string;

//     enable(): Promise<any>;
//     sendAsync?: (
//         request: { method: string; params?: Array<any> },
//         callback: (error: any, response: any) => void
//     ) => void;
//     send?: (request: { method: string; params?: Array<any> }, callback: (error: any, response: any) => void) => void;
//     request?: (request: { method: string; params?: Array<any> }) => Promise<any>;
// }

// declare global {
//     interface Window {
//         ethereum: Ethereumish;
//     }
// }
