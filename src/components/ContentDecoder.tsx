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
    result: EngineResponse;
}

export function ContentDecoder({ to, chainId = '1', result }: ContentDecoderProps) {
    return (
        <>
            <Header to={to} network={networkMapping[chainId]} severity={result ? result.severity : 'NONE'} />

            <Styled.Results>
                <Collapsable title='Spotlight' icon={<SpotlightIcon />} defaultState={true}>
                    <Styled.ContractName>{result.name}</Styled.ContractName>
                    {result.description}
                    <Styled.Copyrights>
                        <ChatGPTIcon />
                        powered by ChatGPT
                    </Styled.Copyrights>
                </Collapsable>

                <Collapsable title='Fraud Analysis' icon={<RadarIcon />}>
                    {result.risks.map((risk, id) => (
                        <Risk key={id} risk={risk} />
                    ))}
                </Collapsable>
            </Styled.Results>
        </>
    );
}
