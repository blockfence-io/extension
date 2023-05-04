import React from 'react';

import { Collapsable } from './UI/Collapsable';
import { MuteButton } from './UI/MuteButton';
import { Placeholder } from './UI/Loader';
import { Header } from './Header';
import { Risk } from './Risk';
import { networkMapping } from './NetworkSelector';
import { Enrichment } from './Enrichment';

import SpotlightIcon from '../assets/icons/spotlight.svg';
import RadarIcon from '../assets/icons/radar-icon.svg';
import ChatGPTIcon from '../assets/icons/chatgpt.svg';

import * as Styled from './ContentDecoder.styles';
import { DataEnrichment, EngineResponse, TransactionSimulation } from '../types/api';

interface ContentDecoderProps {
    to: string;
    chainId?: string;
    descriptionResult: string | undefined;
    analyzeResult: EngineResponse;
    url?: string;
}

function CreateDataEnrichment(title: string, transactionSimulation: TransactionSimulation): DataEnrichment {
    const stats = [
        {
            name: "Out",
            value: transactionSimulation.outgoing_transaction.amount + ' ' + transactionSimulation.outgoing_transaction.name,
            icon: transactionSimulation.outgoing_transaction.logo
        }];
        transactionSimulation.incoming_transaction.amount && stats.push(
            {
                name: "In",
                value: transactionSimulation.incoming_transaction.amount + ' ' + transactionSimulation.incoming_transaction.name,
                icon: transactionSimulation.incoming_transaction.logo
            }
        );
    return {
        title,
        dapp_logo: '../assets/logo.png',
        stats
    };
}

export function ContentDecoder({ to, chainId = '1', descriptionResult, analyzeResult, url }: ContentDecoderProps) {
    return (
        <>
            <Header
                to={to}
                network={networkMapping[chainId]}
                severity={analyzeResult ? analyzeResult.severity : 'NONE'}
                isContract={analyzeResult.is_contract}
                url={url}
            />
            <Styled.Results>
                {analyzeResult.transaction_simulation?.outgoing_transaction.amount &&
                    analyzeResult.transaction_simulation?.outgoing_transaction.name && (
                        <Enrichment dataEnrichment={CreateDataEnrichment('Transaction Simulation', analyzeResult.transaction_simulation)} defaultState={true} />
                    )
                }

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
            </Styled.Results>
        </>
    );
}
