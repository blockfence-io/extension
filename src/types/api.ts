export type TxDescription = {
    name: string;
    description: string;
};

export type ErrorResponse = {
    error: string;
};

export type Severity = 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';

export type Risk = {
    AnalyzerName: string;
    Icon: string;
    Severity: Severity;
    Findings: {
        Description: string;
    }[];
};

export type EngineResponse = {
    name: string;
    severity: Severity;
    description: string;
    risks: Risk[];
};
