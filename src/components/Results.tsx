import React from 'react';
import { UseAsyncReturn } from 'react-async-hook';

import { ChatResponse, EngineResponse } from '../types/api';

import { ContentDecoder } from './ContentDecoder';
import { ErrorMessage, LoadingMessage } from './PageMessages';

interface ResultsProps {
    chainId: string;
    to: string;
    analyzeResult: UseAsyncReturn<EngineResponse>;
    descriptionResult: UseAsyncReturn<ChatResponse>;
}

export function Results({ chainId, to, analyzeResult, descriptionResult }: ResultsProps) {
    const chatError =
        "GPT-3's experiencing some technical difficulties, but don't worry, our team's on it. In the meantime, give it another try or holla at us if you need a hand.";

    return (
        <>
            {analyzeResult.loading && <LoadingMessage />}
            {analyzeResult.error && <ErrorMessage>{analyzeResult.error.message}</ErrorMessage>}
            {analyzeResult.result && (
                <ContentDecoder
                    chainId={chainId}
                    to={to}
                    analyzeResult={analyzeResult.result}
                    descriptionResult={descriptionResult.error ? chatError : descriptionResult.result?.description}
                />
            )}
        </>
    );
}
