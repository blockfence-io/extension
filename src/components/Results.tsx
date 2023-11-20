import React from 'react';
import { UseAsyncReturn } from 'react-async-hook';

import { ChatResponse, EngineResponse } from '../types/api';

import { ContentDecoder } from './ContentDecoder';
import { ErrorMessage, LoadingMessage } from './PageMessages';
import { SupportedNetworks } from '../types/networks';

interface ResultsProps {
    chainId: keyof typeof SupportedNetworks;
    to: string;
    analyzeResult: UseAsyncReturn<EngineResponse>;
    descriptionResult?: UseAsyncReturn<ChatResponse>;
    url?: string;
    shouldRenderMuteButton?: boolean;
}

export function Results({ chainId, to, analyzeResult, descriptionResult, url, shouldRenderMuteButton }: ResultsProps) {
    return (
        <>
            {analyzeResult.loading && <LoadingMessage />}
            {analyzeResult.error && <ErrorMessage>{analyzeResult.error.message}</ErrorMessage>}
            {analyzeResult.result && (
                <ContentDecoder
                    chainId={chainId}
                    to={to}
                    analyzeResult={analyzeResult.result}
                    descriptionResultAsync={descriptionResult}
                    url={url}
                    shouldRenderMuteButton={shouldRenderMuteButton}
                />
            )}
        </>
    );
}
