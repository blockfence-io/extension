export type TxDescription = {
    name: string;
    description: string;
};

export type ErrorResponse = {
    message: string;
};

// TODO Delete comment and merge to a single risk of low/medium/high for both risk and findings
// export type Severity = 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
export type Severity = 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH';

export type Risk = {
    analyzerName: string;
    icon: string;
    severity: Severity;
    findings: {
        description: string;
    }[];
};

export type DataEnrichment = {
    title: string;
    dapp_logo?: string;

    type?: string; // new ???
    description?: string;
    long_description?: string;

    link?: string; // deprecated
    powered_by?: string; // deprecated
    icon?: string; // deprecated
    stats?: Stat[]; // deprecated

    metrics?: {
        name: string;
        amount: number;
        tooltip?: string;
    }[];

    powered_by_data?: {
        icon: string;
        link: string;
        name: string;
    };
};

export type Stat = {
    name: string;
    value: string;
};

export type EngineResponse = {
    name: string;
    severity: Severity;
    is_contract: boolean;
    risks: Risk[]; // Deprecated

    bf_blockchain_analysis?: Risk[];
    bf_web_analysis?: Risk[];
    partners_analysis?: Risk[];

    data_enrichments?: DataEnrichment[];
    transaction_simulation?: TransactionSimulation;
};

export type ChatResponse = {
    description: string;
};

export type TransactionSimulation = {
    outgoing_transaction?: SimulatedTransaction;
    incoming_transaction?: SimulatedTransaction;
    outgoing_gas?: SimulatedTransaction;
};

export type SimulatedTransaction = {
    symbol: string;
    amount: number;
    from?: string;
    to?: string;
    name?: string;
    logo?: string;
    usd?: number;
};

export type FeedbackRequest = {
    analyze_request: {
        chain_id: string;
        to: string;
        url: string;
    };
    analyze_response: EngineResponse;
    manual_search: boolean;
    user_happy: boolean;
    user_comment: string;
};

export type FeedbackResponse = {
    message: string; //unused for now
};

export type QuestStatusRequest = {
    count: number;
};

export type QuestStatusResponse = {
    active: boolean;
};

export type QuestRewardRequest = {
    email: string;
};

export type QuestRewardResponse = {
    success: boolean;
};
