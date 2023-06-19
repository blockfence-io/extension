import type { Meta } from '@storybook/react';
import React, { useState } from 'react';
import { ErrorPage } from './CriticalError';
import { useAsyncCallback } from 'react-async-hook';
import { ChatResponse, EngineResponse } from '../types/api';
import { ContentDecoder } from './ContentDecoder';

const meta: Meta<typeof ErrorPage> = {
    component: ErrorPage,
};

export const Default = () => {
    const descriptionResult = useAsyncCallback(async (chainId, to) => mockfetch(chainId, to));
    descriptionResult.result = {
        description,
    };

    return (
        <div style={{ width: '390px', height: '800px', background: '#F0F6FF' }}>
            <ContentDecoder
                chainId={chainId}
                to={to}
                analyzeResult={analyzeResult}
                descriptionResultAsync={descriptionResult}
                url={url}
            />
        </div>
    );
};

export default meta;

const chainId = '1';
const to = '0x00000000000000adc04c56bf30ac9d3c0aaf14dc';
const url = 'https://opensea.io/collection/ringerpunks';
const analyzeResult: EngineResponse = {
    severity: 'NONE',
    name: 'Seaport',
    risks: [
        {
            analyzerName: 'Address Familiarity Score',
            findings: [
                {
                    description: 'This address is listed by DappRadar',
                },
            ],
            icon: 'https://blockfence-assets.s3.amazonaws.com/icons/bf_classifier.png',
            severity: 'NONE',
        },
        {
            analyzerName: 'GoPlus Contract Analysis',
            findings: [
                {
                    description: 'No threats detected on GoPlus Labs.',
                },
            ],
            icon: 'https://blockfence-assets.s3.amazonaws.com/icons/goplus.png',
            severity: 'NONE',
        },
        {
            analyzerName: 'Blockfence Smart Contract Analysis',
            findings: [
                {
                    description: 'No threats detected',
                },
            ],
            icon: 'https://blockfence-assets.s3.amazonaws.com/icons/bf_classifier.png',
            severity: 'NONE',
        },
        {
            analyzerName: 'Forta Network',
            findings: [
                {
                    description:
                        'A gang of friendly bots at Forta scanned the address and found no alerts on Forta Network',
                },
            ],
            icon: 'https://blockfence-assets.s3.amazonaws.com/icons/forta.png',
            severity: 'NONE',
        },
        {
            analyzerName: 'Source Code Verification',
            findings: [
                {
                    description: 'Source Code analysis found no risks',
                },
            ],
            icon: 'https://blockfence-assets.s3.amazonaws.com/icons/sources.png',
            severity: 'NONE',
        },
        {
            analyzerName: 'URL Familiarity Score',
            findings: [
                {
                    description: 'This address belongs to a known verified source: Opensea Seaport.',
                },
            ],
            icon: 'https://blockfence-assets.s3.amazonaws.com/icons/bf_classifier.png',
            severity: 'NONE',
        },
        {
            analyzerName: 'GoPlus Phishing Test',
            findings: [
                {
                    description: 'No threats detected on GoPlus Labs.',
                },
            ],
            icon: 'https://blockfence-assets.s3.amazonaws.com/icons/goplus.png',
            severity: 'NONE',
        },
        {
            analyzerName: 'URL Similarity Verification',
            findings: [
                {
                    description: 'No similarity found',
                },
            ],
            icon: 'https://blockfence-assets.s3.amazonaws.com/icons/sources.png',
            severity: 'NONE',
        },
        {
            analyzerName: 'Web Risk Phishing Check',
            findings: [
                {
                    description: 'URL Web Risk Check done. No threats found.',
                },
            ],
            icon: 'https://blockfence-assets.s3.amazonaws.com/icons/url.png',
            severity: 'NONE',
        },
    ],
    is_contract: true,
    data_enrichments: [
        {
            title: 'OpenSea',
            type: 'DAPP',
            dapp_logo:
                'https://dashboard-assets.dappradar.com/document/13/opensea-dapp-marketplaces-ethereum-logo_a3421ac6e32d529db3c8293f4cfa9bcd.png',
            powered_by_data: {
                icon: 'https://blockfence-assets.s3.amazonaws.com/icons/dapraddar.png',
                name: 'DappRadar',
                link: 'https://dappradar.com/ethereum/marketplaces/opensea',
            },
            description: 'OpenSea is the first and largest peer-to-peer mark',
            long_description:
                '\u003cp\u003eOpenSea is the first and largest peer-to-peer marketplace for crypto collectibles, which include gaming items, digital art, and other virtual goods backed by a blockchain.\u003c/p\u003e',
            metrics: [
                {
                    name: 'Users',
                    amount: 12500,
                    tooltip: 'Number of Users',
                },
                {
                    name: 'Transactions',
                    amount: 24668,
                    tooltip: 'Number of Transactions',
                },
                {
                    name: 'Volume',
                    amount: 2331080,
                    tooltip: 'Volume in USD',
                },
                {
                    name: 'Balance',
                    amount: 62421,
                    tooltip: 'Balance in USD',
                },
            ],
            stats: [
                {
                    name: 'Website',
                    value: 'https://opensea.io',
                },
                {
                    name: 'Description',
                    value: 'OpenSea is the first and largest peer-to-peer mark',
                },
                {
                    name: 'Balance',
                    value: '$62421.04',
                },
                {
                    name: 'Transactions',
                    value: '24668.00',
                },
                {
                    name: 'Volume',
                    value: '$2331080.96',
                },
                {
                    name: 'Users',
                    value: '12500.00',
                },
            ],
            link: 'https://dappradar.com/ethereum/marketplaces/opensea',
            icon: 'https://blockfence-assets.s3.amazonaws.com/icons/dapraddar.png',
            powered_by: 'DappRadar',
        },
    ],
    transaction_simulation: {
        outgoing_transaction: {
            from: '0x22f318a46e02245e7adb6b6fdd0ce5c3d4330430',
            to: '0x00000000000000adc04c56bf30ac9d3c0aaf14dc',
            amount: 0.0016,
            name: 'Ethereum',
            symbol: 'ETH',
            logo: 'https://static.alchemyapi.io/images/network-assets/eth.png',
            usd: 2.755664,
        },
        incoming_transaction: {
            from: '0x9cd661d19426c8d2ddc23ac2bb8ce0251ff1dad7',
            to: '0x22f318a46e02245e7adb6b6fdd0ce5c3d4330430',
            amount: 1,
            name: 'RingerPunks',
            symbol: 'RNGRP',
            logo: '',
            usd: 0,
        },
        outgoing_gas: {
            from: '',
            to: '',
            amount: 165931,
            name: '',
            symbol: 'GWEI',
            logo: 'https://static.alchemyapi.io/images/network-assets/eth.png',
            usd: 17.939752489994678,
        },
    },
    bf_web_analysis: [
        {
            analyzerName: 'URL Familiarity Score',
            findings: [
                {
                    description: 'This address belongs to a known verified source: Opensea Seaport.',
                },
            ],
            icon: 'https://blockfence-assets.s3.amazonaws.com/icons/bf_classifier.png',
            severity: 'NONE',
        },
        {
            analyzerName: 'URL Similarity Verification',
            findings: [
                {
                    description: 'No similarity found',
                },
            ],
            icon: 'https://blockfence-assets.s3.amazonaws.com/icons/sources.png',
            severity: 'NONE',
        },
        {
            analyzerName: 'Web Risk Phishing Check',
            findings: [
                {
                    description: 'URL Web Risk Check done. No threats found.',
                },
            ],
            icon: 'https://blockfence-assets.s3.amazonaws.com/icons/url.png',
            severity: 'NONE',
        },
    ],
    bf_blockchain_analysis: [
        {
            analyzerName: 'Address Familiarity Score',
            findings: [
                {
                    description: 'This address is listed by DappRadar',
                },
            ],
            icon: 'https://blockfence-assets.s3.amazonaws.com/icons/bf_classifier.png',
            severity: 'NONE',
        },
        {
            analyzerName: 'Blockfence Smart Contract Analysis',
            findings: [
                {
                    description: 'No threats detected',
                },
            ],
            icon: 'https://blockfence-assets.s3.amazonaws.com/icons/bf_classifier.png',
            severity: 'NONE',
        },
        {
            analyzerName: 'Source Code Verification',
            findings: [
                {
                    description: 'Source Code analysis found no risks',
                },
            ],
            icon: 'https://blockfence-assets.s3.amazonaws.com/icons/sources.png',
            severity: 'NONE',
        },
    ],
    partners_analysis: [
        {
            analyzerName: 'GoPlus Contract Analysis',
            findings: [
                {
                    description: 'No threats detected on GoPlus Labs.',
                },
            ],
            icon: 'https://blockfence-assets.s3.amazonaws.com/icons/goplus.png',
            severity: 'NONE',
        },
        {
            analyzerName: 'Forta Network',
            findings: [
                {
                    description:
                        'A gang of friendly bots at Forta scanned the address and found no alerts on Forta Network',
                },
            ],
            icon: 'https://blockfence-assets.s3.amazonaws.com/icons/forta.png',
            severity: 'NONE',
        },
        {
            analyzerName: 'GoPlus Phishing Test',
            findings: [
                {
                    description: 'No threats detected on GoPlus Labs.',
                },
            ],
            icon: 'https://blockfence-assets.s3.amazonaws.com/icons/goplus.png',
            severity: 'NONE',
        },
    ],
};
const description =
    'This smart contract is like a computer program that helps people exchange different things like digital tokens and assets with each other on the Ethereum blockchain. It has different functions that check and validate orders, ensure offers and considerations match, and transfer tokens securely between parties. Users can interact with the contract by sending transactions through their digital wallets.';
const mockfetch = async (chainId: string, to: string): Promise<ChatResponse> => {
    return Promise.resolve({
        description,
    });
};
