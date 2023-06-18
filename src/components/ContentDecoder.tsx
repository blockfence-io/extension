import React, { useState } from 'react';

import { Collapsable } from './UI/Collapsable';
import { MuteButton } from './UI/MuteButton';
import { Placeholder } from './UI/Loader';
import { Risk, RiskGroup } from './Risk';
import { Enrichment } from './Enrichment';

import SpotlightIcon from '../assets/icons/spotlight.svg';
import AddressIcon from '../assets/icons/address.svg';
import ContractIcon from '../assets/icons/contract.svg';
import PartnersIcon from '../assets/icons/partners.svg';
import ChatGPTIcon from '../assets/icons/chatgpt.svg';

import * as Styled from './ContentDecoder.styles';
import { ChatResponse, EngineResponse, TransactionSimulation } from '../types/api';
import { UseAsyncReturn } from 'react-async-hook';
import { Feedback } from './UI/Feedback';
import { postFeedback } from '../shared/api';
import { SupportedNetworks } from '../types/networks';
import { Panel } from './UI/Panel';
import { NavigationBar } from './NavigationBar';
import { TabOptions, Tabs } from './UI/Tabs';

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

const infoTab = '1';
const analysisTab = '2';

const tabOptions: TabOptions[] = [
    { key: infoTab, title: 'Info' },
    { key: analysisTab, title: 'Analysis' },
];

export function ContentDecoder({ to, chainId = '1', descriptionResultAsync, analyzeResult, url }: ContentDecoderProps) {
    const defaultTab = analyzeResult.severity === 'NONE' ? infoTab : analysisTab;
    const [tab, setTab] = useState(defaultTab);

    const onFeedbackClick = async (thumbsUp: boolean, comment: string) => {
        const isManualSearch = url ? true : false; // TODO: we should have a better way to do this
        await postFeedback(chainId, to, url || '', analyzeResult, isManualSearch, thumbsUp, comment);
    };

    return (
        <>
            <Styled.Results>
                {/* Simulation was shown on panel, we should show Tx summary instead */}
                {analyzeResult.transaction_simulation && shouldShowSimulation(analyzeResult.transaction_simulation) && (
                    <Panel style={{ padding: '10px', marginBottom: '20px' }}>
                        <NavigationBar address={to} url={url} compact />
                    </Panel>
                )}

                {/* Tabs */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                    <Tabs selected={tab} onChange={setTab} options={tabOptions} />
                </div>

                {tab === infoTab && renderInfoTab(analyzeResult, descriptionResultAsync)}

                {tab === analysisTab && renderAnalysisTab(analyzeResult)}

                {url && renderMuteButton(to, chainId, url)}

                <Styled.Options>
                    <Feedback onClick={onFeedbackClick} />
                </Styled.Options>
            </Styled.Results>
        </>
    );
}
function renderMuteButton(to: string, chainId: keyof typeof SupportedNetworks, url: string): React.ReactNode {
    return (
        <Styled.Options>
            <Panel>
                <MuteButton
                    address={to}
                    chainId={chainId}
                    url={url}
                    text='Disable future alerts for this Transaction'
                />
            </Panel>
        </Styled.Options>
    );
}

function renderInfoTab(
    analyzeResult: EngineResponse,
    descriptionResultAsync: UseAsyncReturn<ChatResponse>
): React.ReactNode {
    return (
        <>
            {/* DAPP */}
            {analyzeResult.data_enrichments &&
                analyzeResult.data_enrichments.map((dataEnrichment, id) => (
                    <Enrichment key={id} dataEnrichment={dataEnrichment} defaultState={false} />
                ))}

            {/* Description */}
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
                            {analyzeResult.is_contract && (
                                <Styled.Copyrights>
                                    <ChatGPTIcon />
                                    Powered by OpenAI
                                </Styled.Copyrights>
                            )}
                        </>
                    )}
                </Collapsable>
            )}
        </>
    );
}

function renderAnalysisTab(analyzeResult: EngineResponse): React.ReactNode {
    return (
        <>
            {analyzeResult.bf_blockchain_analysis && analyzeResult.bf_blockchain_analysis.length > 0 && (
                <Collapsable
                    title={analyzeResult.is_contract ? 'Smart Contract' : 'EOA'}
                    icon={<ContractIcon />}
                    defaultState={false}
                >
                    <RiskGroup>
                        {analyzeResult.bf_blockchain_analysis.map((risk, id) => (
                            <Risk key={id} risk={risk} />
                        ))}
                    </RiskGroup>
                </Collapsable>
            )}
            {analyzeResult.bf_web_analysis && analyzeResult.bf_web_analysis.length > 0 && (
                <Collapsable title='Website' icon={<AddressIcon />} defaultState={false}>
                    <RiskGroup>
                        {analyzeResult.bf_web_analysis.map((risk, id) => (
                            <Risk key={id} risk={risk} />
                        ))}
                    </RiskGroup>
                </Collapsable>
            )}
            {analyzeResult.partners_analysis && analyzeResult.partners_analysis.length > 0 && (
                <Collapsable title='Partners' icon={<PartnersIcon />} defaultState={false}>
                    <RiskGroup>
                        {analyzeResult.partners_analysis.map((risk, id) => (
                            <Risk key={id} risk={risk} />
                        ))}
                    </RiskGroup>
                </Collapsable>
            )}
        </>
    );
}
