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

export const fetchResult = async (chainId: string, to: string): Promise<EngineResponse> => {
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
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            const axiosError = error as AxiosError<ErrorResponse>;

            if (axiosError.response?.data.error) {
                throw new Error(axiosError.response.data.error);
            }
        }
        throw new Error("Whoops, something went wrong. Hang tight, we're working on it. Give it another shot later.");
    }
};
