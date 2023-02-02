export type TxDescription = {
    name: string;
    description: string;
};

export type ErrorResponse = {
    error: string;
};

export type Risk = {
    AnalyzerName: string;
    Icon: string;
    Severity: string;
    Findings: {
        Description: string;
    }[];
};

export type EngineResponse = {
    name: string;
    severity: string;
    description: string;
    risks: Risk[];
};
