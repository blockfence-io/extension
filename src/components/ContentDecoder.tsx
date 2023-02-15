import React from 'react';

import { networkMapping } from './NetworkSelector';

import { Header } from './Header';
import { Collapsable } from './UI/Collapsable';
import { Risk } from './Risk';

import SpotlightIcon from '../assets/icons/spotlight.svg';
import RadarIcon from '../assets/icons/radar-icon.svg';
import ChatGPTIcon from '../assets/icons/chatgpt.svg';

import * as Styled from './ContentDecoder.styles';
import { EngineResponse } from '../types/api';

interface ContentDecoderProps {
    to: string;
    chainId?: string;
    descriptionResult: EngineResponse;
    analyzeResult: EngineResponse;
}

export function ContentDecoder({ to, chainId = '1', descriptionResult, analyzeResult }: ContentDecoderProps) {
    const name = descriptionResult ? descriptionResult.name : analyzeResult.name;

    return (
        <>
            <Header
                to={to}
                network={networkMapping[chainId]}
                severity={analyzeResult ? analyzeResult.severity : 'NONE'}
            />

            <Styled.Results>
                <Collapsable title='Description' icon={<SpotlightIcon />} defaultState={true}>
                    <Styled.ContractName>{name}</Styled.ContractName>
                    {descriptionResult.description}
                    <Styled.Copyrights>
                        <ChatGPTIcon />
                        Powered by OpenAI
                    </Styled.Copyrights>
                </Collapsable>

                <Collapsable title='Fraud Analysis' icon={<RadarIcon />}>
                    {analyzeResult.risks.map((risk, id) => (
                        <Risk key={id} risk={risk} />
                    ))}
                </Collapsable>
            </Styled.Results>
        </>
    );
}
