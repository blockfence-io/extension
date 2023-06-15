import type { Meta } from '@storybook/react';
import React, { useState } from 'react';
import { Enrichment } from './Enrichment';
import { DataEnrichment } from '../types/api';

const meta: Meta<typeof Enrichment> = {
    component: Enrichment,
};

const fakeData: DataEnrichment = {
    title: 'CoW Swap',
    type: 'DAPP',
    dapp_logo:
        'https://dashboard-assets.dappradar.com/document/6728/cowswap-dapp-defi-ethereum-logo_f454c122e07a03fc17547488ecf789ef.png',
    powered_by_data: {
        icon: 'https://blockfence-assets.s3.amazonaws.com/icons/dapraddar.png',
        name: 'DappRadar',
        link: 'https://dappradar.com/ethereum/defi/cow-swap',
    },
    description:
        'CoW Protocol finds the lowest price for your trade across all exchanges and aggregators, such as Uniswap and 1inch and protects you from MEV, unlike the others.',
    long_description:
        "\u003cp\u003eCowSwap is the crypto exchange that gives you peace of mind. On CowSwap, you don’t have to worry about finding the best price, optimizing your gas costs, or getting exploited by bots. We take care of everything for you.\u003c/p\u003e\n\u003cp\u003eAvoid all the complexities of crypto networks. If the best price is on Uniswap, you get that same price on CowSwap. If there’s a better price elsewhere, CowSwap gives you that price. CowSwap’s gas fees are also lower on average. In addition, CowSwap protects you from getting rekt in ways that other exchanges don’t. On CowSwap, you will never pay for a failed trade. Your trade will never be sandwiched or frontrun. And you don’t have to make sure you hold enough ETH to execute your trade.\u003c/p\u003e\n\u003cp\u003eUnlike in other exchanges, users don't execute the trade themselves, but rather place their orders via signed messages. CowSwap handles the execution for you, while you maintain custody of your tokens. After you sign your order, CowSwap tries to match you peer-to-peer with another trader. If there’s a match, you both get better prices and lower fees. For trades that can’t be matched peer-to-peer, we find you the best price on-chain. Why complicate things when you can let the protocol handle everything?\u003c/p\u003e\n\u003cp\u003eWe check all on-chain liquidity sources (including Uniswap, Sushiswap and others) as well as aggregators like 1inch to pick the best price for you. Even better, if your trade is matched peer-to-peer with another trade, you get a better price than anyone else can get on-chain. (We call that a Coincidence of Wants, or “CoW” - hence the name CowSwap!)\u003c/p\u003e",
    metrics: [
        {
            name: 'Users',
            amount: 735,
            tooltip: 'Number of Users',
        },
        {
            name: 'Transactions',
            amount: 677,
            tooltip: 'Number of Transactions',
        },
        {
            name: 'Volume',
            amount: 59917130,
            tooltip: 'Volume in USD',
        },
        {
            name: 'Balance',
            amount: 114115,
            tooltip: 'Balance in USD',
        },
    ],
    // stats: [
    //     {
    //         name: 'Website',
    //         value: 'https://cowswap.exchange',
    //     },
    //     {
    //         name: 'Description',
    //         value: 'CoW Protocol finds the lowest price for your trade across all exchanges and aggregators, such as Uniswap and 1inch and protects you from MEV, unlike the others.',
    //     },
    //     {
    //         name: 'Balance',
    //         value: '$114115.84',
    //     },
    //     {
    //         name: 'Transactions',
    //         value: '677.00',
    //     },
    //     {
    //         name: 'Volume',
    //         value: '$59917130.39',
    //     },
    //     {
    //         name: 'Users',
    //         value: '735.00',
    //     },
    // ],
    // link: 'https://dappradar.com/ethereum/defi/cow-swap',
    // icon: 'https://blockfence-assets.s3.amazonaws.com/icons/dapraddar.png',
    // powered_by: 'DappRadar',
};

export const Primary = () => (
    <div style={{ width: '370px', height: '400px' }}>
        <Enrichment dataEnrichment={fakeData} defaultState={true} />
    </div>
);

export default meta;
