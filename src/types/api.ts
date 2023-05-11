export type TxDescription = {
    name: string;
    description: string;
};

export type ErrorResponse = {
    message: string;
};

export type Severity = 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';

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
    link?: string;
    powered_by?: string;
    icon?: string;
    dapp_logo?: string;
    stats: Stat[];
};

export type Stat = {
    name: string;
    value: string;
};

export type EngineResponse = {
    name: string;
    severity: Severity;
    is_contract: boolean;
    risks: Risk[];
    data_enrichments: DataEnrichment[];
    transaction_simulation?: TransactionSimulation;
};

export type ChatResponse = {
    description: string;
};

export type TransactionSimulation = {
    outgoing_transaction: SimulatedTransaction;
    incoming_transaction: SimulatedTransaction;
    gas_used: number;
    gas_symbol: string;
    gas_usd: number;
}

export type SimulatedTransaction = {
    from: string;
    to: string;
    amount: number;
    name: string;
    symbol: string;
    logo: string;
    usd: number;
}