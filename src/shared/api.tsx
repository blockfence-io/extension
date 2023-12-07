import axios, { AxiosError } from 'axios';
import {
    ChatResponse,
    EngineResponse,
    ErrorResponse,
    FeedbackRequest,
    FeedbackResponse,
    QuestRewardRequest,
    QuestRewardResponse,
    QuestStatusResponse,
} from '../types/api';
import { logException } from '../shared/logs';
import { SupportedNetworks } from '../types/networks';

const BASE_URL = process.env.API_SERVER;
const API_KEY = process.env.API_KEY;

async function _fetchFunction<ResponseType>(
    page: string,
    chainId: string,
    to: string,
    url: string,
    from?: string,
    value?: string,
    data?: string
): Promise<ResponseType> {
    try {
        const response = await axios({
            method: 'post',
            url: `${BASE_URL}/${page}`,
            headers: {
                'x-api-key': API_KEY,
            },
            data: {
                plugin: 'BROWSER',
                chain_id: chainId,
                transaction: {
                    from,
                    to,
                    value,
                    data,
                },
                browser_data: {
                    url,
                },
            },
        });
        return response.data;
    } catch (error) {
        logException(error);
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
    return _fetchFunction<ChatResponse>('chat', chainId, to, '');
};

export const fetchAnalyze = async (
    chainId: string,
    to: string,
    url: string,
    from = '',
    value = '',
    data = ''
): Promise<EngineResponse> => {
    return _fetchFunction<EngineResponse>('analyze', chainId, to, url, from, value, data);
};

export const questStatus = async (req: QuestRewardRequest): Promise<QuestStatusResponse> => {
    try {
        const response = await fetch(`${BASE_URL}/quest_status`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': API_KEY as string,
            },
            body: JSON.stringify(req),
        });

        if (!response.ok) {
            const errorData: ErrorResponse = await response.json();
            throw new Error(errorData.message || 'Whoops, something went wrong.');
        }

        const data: QuestStatusResponse = await response.json();
        return data;
    } catch (error) {
        logException(error);
        throw new Error("Whoops, something went wrong. Hang tight, we're working on it. Give it another shot later.");
    }
};

export const questReward = async (req: QuestRewardRequest): Promise<QuestRewardResponse> => {
    try {
        const response = await axios({
            method: 'post',
            url: `${BASE_URL}/quest_reward`,
            headers: {
                'x-api-key': API_KEY,
            },
            data: {
                ...req,
            },
        });
        return response.data;
    } catch (error) {
        logException(error);
        if (axios.isAxiosError(error) && error.response) {
            const axiosError = error as AxiosError<ErrorResponse>;
            if (axiosError.response?.data.message) {
                throw new Error(axiosError.response.data.message);
            }
        }
        throw new Error("Whoops, something went wrong. Hang tight, we're working on it. Give it another shot later.");
    }
};

const _postFeedback = async (req: FeedbackRequest): Promise<FeedbackResponse> => {
    try {
        const response = await axios({
            method: 'post',
            url: `${BASE_URL}/feedback`,
            headers: {
                'x-api-key': API_KEY,
            },
            data: {
                ...req,
            },
        });
        return response.data;
    } catch (error) {
        logException(error);
        if (axios.isAxiosError(error) && error.response) {
            const axiosError = error as AxiosError<ErrorResponse>;
            if (axiosError.response?.data.message) {
                throw new Error(axiosError.response.data.message);
            }
        }
        throw new Error("Whoops, something went wrong. Hang tight, we're working on it. Give it another shot later.");
    }
};

export const postFeedback = async (
    chain_id: keyof typeof SupportedNetworks,
    to: string,
    url: string,
    analyze_response: EngineResponse,
    manual_search: boolean,
    user_happy: boolean,
    user_comment: string
): Promise<FeedbackResponse> => {
    const req: FeedbackRequest = {
        analyze_request: { chain_id: chain_id as string, to, url },
        analyze_response,
        manual_search,
        user_happy,
        user_comment,
    };
    return _postFeedback(req);
};
