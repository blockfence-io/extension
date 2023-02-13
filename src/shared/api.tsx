import { useState } from 'react';
import axios, { AxiosError } from 'axios';

import { EngineResponse, ErrorResponse } from '../types/api';

const BASE_URL = process.env.API_SERVER;

async function getActiveTabUrl() {
    return new Promise(function (resolve, reject) {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            if (tabs.length > 0) {
                resolve(tabs[0].url);
            } else {
                reject('No active tab found');
            }
        });
    });
}

export function useGetResults() {
    const [result, setResult] = useState<EngineResponse | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [fatalError, setFatalError] = useState<boolean>(false);

    async function getData(to: string, chainId?: string) {
        setIsLoading(true);
        setError(null);
        setFatalError(false);
        setResult(null);
        try {
            const url = await getActiveTabUrl();
            const response = await axios({
                method: 'post',
                url: BASE_URL,
                data: {
                    plugin: 'BROWSER',
                    chain_id: chainId,
                    transaction: {
                        to,
                    },
                    browser_data: {
                        url,
                    },
                },
            });
            setResult(response.data);
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                const axiosError = error as AxiosError<ErrorResponse>;
                if (axiosError.response?.data.error) {
                    setError(axiosError.response.data.error);
                } else {
                    setFatalError(true);
                }
            } else {
                setFatalError(true);
            }
        }
        setIsLoading(false);
    }

    return { result, isLoading, error, fatalError, getData };
}
