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
import { EngineResponse } from '../types/api';
import { MuteButton } from './UI/MuteButton';

interface ContentDecoderProps {
    to: string;
    chainId?: string;
    descriptionResult: string | undefined;
    analyzeResult: EngineResponse;
    url?: string;
}

export function ContentDecoder({ to, chainId = '1', descriptionResult, analyzeResult, url }: ContentDecoderProps) {
    return (
        <>
            {url && <MuteButton address={to} chainId={chainId} url={url} />}
            <Header
                to={to}
                network={networkMapping[chainId]}
                severity={analyzeResult ? analyzeResult.severity : 'NONE'}
                isContract={analyzeResult.is_contract}
            />
            <Styled.Results>
                {analyzeResult.data_enrichments &&
                    analyzeResult.data_enrichments.map((dataEnrichment, id) => (
                        <Enrichment key={id} dataEnrichment={dataEnrichment} defaultState={false} />
                    ))}

                <Collapsable
                    title={analyzeResult.is_contract ? 'Contract Description' : 'Description'}
                    icon={<SpotlightIcon />}
                    defaultState={analyzeResult.data_enrichments.length > 0 ? false : true}
                >
                    {analyzeResult.name !== '' && (
                        <Styled.ContractName>
                            {analyzeResult.is_contract ? 'Contract Name' : 'Name'}: {analyzeResult.name}
                        </Styled.ContractName>
                    )}
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

                <Collapsable title='Fraud Analysis' icon={<RadarIcon />} defaultState={false}>
                    {analyzeResult.risks.map((risk, id) => (
                        <Risk key={id} risk={risk} />
                    ))}
                </Collapsable>
            </Styled.Results>
        </>
    );
}
