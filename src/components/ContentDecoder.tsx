import React from 'react';

import { Collapsable } from './UI/Collapsable';
import { MuteButton } from './UI/MuteButton';
import { Placeholder } from './UI/Loader';
import { Risk } from './Risk';
import { Enrichment } from './Enrichment';

import SpotlightIcon from '../assets/icons/spotlight.svg';
import RadarIcon from '../assets/icons/radar-icon.svg';
import ChatGPTIcon from '../assets/icons/chatgpt.svg';
import { UilExchangeAlt } from '@iconscout/react-unicons';

import * as Styled from './ContentDecoder.styles';
import { ChatResponse, EngineResponse, TransactionSimulation } from '../types/api';
import { Simulation } from './Simulation';
import { UseAsyncReturn } from 'react-async-hook';
import { Feedback } from './UI/Feedback';
import { postFeedback } from '../shared/api';
import { SupportedNetworks } from '../types/networks';

interface ContentDecoderProps {
    to: string;
    chainId?: keyof typeof SupportedNetworks;
    descriptionResultAsync: UseAsyncReturn<ChatResponse>;
    analyzeResult: EngineResponse;
    url?: string;
}

const shouldShowSimulation = (transaction_simulation?: TransactionSimulation) => {
    return (
        transaction_simulation?.outgoing_transaction?.symbol?.length != 0 ||
        transaction_simulation?.incoming_transaction?.symbol?.length != 0
    );
};

const chatError =
    "GPT-3's experiencing some technical difficulties, but don't worry, our team's on it. In the meantime, give it another try or holla at us if you need a hand.";

export function ContentDecoder({ to, chainId = '1', descriptionResultAsync, analyzeResult, url }: ContentDecoderProps) {
    const onFeedbackClick = async (thumbsUp: boolean, comment: string) => {
        const isManualSearch = url ? true : false; // TODO: we should have a better way to do this
        await postFeedback(chainId, to, url || '', analyzeResult, isManualSearch, thumbsUp, comment);
    };

    return (
        <>
            <Styled.Results>
                {analyzeResult.transaction_simulation && shouldShowSimulation(analyzeResult.transaction_simulation) && (
                    <Collapsable title='Transaction Simulation' icon={<UilExchangeAlt />} defaultState={true}>
                        <Simulation simulation={analyzeResult.transaction_simulation} />
                    </Collapsable>
                )}

                {analyzeResult.data_enrichments &&
                    analyzeResult.data_enrichments.map((dataEnrichment, id) => (
                        <Enrichment key={id} dataEnrichment={dataEnrichment} defaultState={false} />
                    ))}
                {(descriptionResultAsync.loading || descriptionResultAsync.error || descriptionResultAsync.result) && (
                    <Collapsable
                        title={analyzeResult.is_contract ? 'Contract Description' : 'Description'}
                        icon={<SpotlightIcon />}
                        defaultState={
                            analyzeResult.data_enrichments && analyzeResult.data_enrichments.length > 0 ? false : true
                        }
                    >
                        {analyzeResult.name !== '' && (
                            <Styled.ContractName>
                                {analyzeResult.is_contract ? 'Contract Name' : 'Name'}: {analyzeResult.name}
                            </Styled.ContractName>
                        )}
                        {descriptionResultAsync.loading ? (
                            <Placeholder />
                        ) : (
                            <>
                                {descriptionResultAsync.error ? chatError : descriptionResultAsync.result?.description}
                                <Styled.Copyrights>
                                    <ChatGPTIcon />
                                    Powered by OpenAI
                                </Styled.Copyrights>
                            </>
                        )}
                    </Collapsable>
                )}

                <Collapsable title='Fraud Analysis' icon={<RadarIcon />} defaultState={false}>
                    {analyzeResult.risks.map((risk, id) => (
                        <Risk key={id} risk={risk} />
                    ))}
                </Collapsable>

                {url && (
                    <Styled.Options>
                        <MuteButton
                            address={to}
                            chainId={chainId}
                            url={url}
                            text='Disable future alerts for this Transaction'
                        />
                    </Styled.Options>
                )}

                <Styled.Options>
                    <Feedback onClick={onFeedbackClick} />
                </Styled.Options>
            </Styled.Results>
        </>
    );
}
