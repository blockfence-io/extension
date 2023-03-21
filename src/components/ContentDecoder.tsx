import React from 'react';

import { Collapsable } from './UI/Collapsable';
import { Placeholder } from './UI/Loader';
import { Header } from './Header';
import { Risk } from './Risk';
import { networkMapping } from './NetworkSelector';
import { Enrichment } from './Enrichment';

import SpotlightIcon from '../assets/icons/spotlight.svg';
import RadarIcon from '../assets/icons/radar-icon.svg';
import ChatGPTIcon from '../assets/icons/chatgpt.svg';

import * as Styled from './ContentDecoder.styles';
import { DataEnrichment, EngineResponse } from '../types/api';

interface ContentDecoderProps {
    to: string;
    chainId?: string;
    descriptionResult: string | undefined;
    analyzeResult: EngineResponse;
}

export function ContentDecoder({ to, chainId = '1', descriptionResult, analyzeResult }: ContentDecoderProps) {
    console.log('dapp:', analyzeResult.data_enrichments);
    // MOCK
    analyzeResult.data_enrichments = [
        {
            title: 'DAPP: CryptoKitties',
            powered_by: 'Powered by DappRadar',
            icon: 'https://blockfence-assets.s3.amazonaws.com/icons/dapraddar.png',
            stats: [
                {
                    name: 'Website',
                    value: 'https://www.cryptokitties.co',
                },
                {
                    name: 'Description',
                    value: 'In CryptoKitties, users collect and breed oh-so-adorable creatures that we call CryptoKitties! Each kitty has a unique genome that defines its appearance and traits. Players can breed their kitties to create new furry friends and unlock rare cattributes.',
                },
                {
                    name: 'Balance',
                    value: ' $87319477.8',
                },
                {
                    name: 'Transactions',
                    value: '65483',
                },
                {
                    name: 'Volume',
                    value: ' $1121k',
                },
                {
                    name: 'Users',
                    value: '27448',
                },
            ],
        },
    ];

    return (
        <>
            <Header
                to={to}
                network={networkMapping[chainId]}
                severity={analyzeResult ? analyzeResult.severity : 'NONE'}
                isContract={analyzeResult.is_contract}
            />

            <Styled.Results>
                <Collapsable title='Description' icon={<SpotlightIcon />} defaultState={true}>
                    {analyzeResult.name !== '' && <Styled.ContractName>Name: {analyzeResult.name}</Styled.ContractName>}
                    {descriptionResult ? (
                        <>
                            {descriptionResult}
                            <Styled.Copyrights>
                                <ChatGPTIcon />
                                Powered by OpenAI
                            </Styled.Copyrights>
                        </>
                    ) : (
                        <Placeholder />
                    )}
                </Collapsable>

                {analyzeResult.data_enrichments &&
                    analyzeResult.data_enrichments.map((dataEnrichment, id) => (
                        <Enrichment key={id} dataEnrichment={dataEnrichment} defaultState={false} />
                    ))}

                <Collapsable title='Fraud Analysis' icon={<RadarIcon />} defaultState={false}>
                    {analyzeResult.risks.map((risk, id) => (
                        <Risk key={id} risk={risk} />
                    ))}
                </Collapsable>
            </Styled.Results>
        </>
    );
}
