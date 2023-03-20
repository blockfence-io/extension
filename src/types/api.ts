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
};

export type ChatResponse = {
    description: string;
};
