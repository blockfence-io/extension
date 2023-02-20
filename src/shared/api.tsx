import axios, { AxiosError } from 'axios';
import { ChatResponse, EngineResponse, ErrorResponse } from '../types/api';

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

async function _fetchFunction<ResponseType>(page: string, chainId: string, to: string): Promise<ResponseType> {
    try {
        console.log('sending request: ' + `${BASE_URL}/${page}`);
        const url = await getActiveTabUrl();
        const response = await axios({
            method: 'post',
            url: `${BASE_URL}/${page}`,
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
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            const axiosError = error as AxiosError<ErrorResponse>;
            if (axiosError.response?.data.message) {
                throw new Error(axiosError.response.data.message);
            }
        }
        throw new Error("Whoops, something went wrong. Hang tight, we're working on it. Give it another shot later.");
    }
}

export const fetchDescription = async (chainId: string, to: string): Promise<ChatResponse> => {
    return _fetchFunction<ChatResponse>('chat', chainId, to);
};

export const fetchAnalyze = async (chainId: string, to: string): Promise<EngineResponse> => {
    return _fetchFunction<EngineResponse>('analyze', chainId, to);
};
