export type TxDescription = {
    name: string;
    description: string;
};

export type ErrorResponse = {
    error: string;
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

export type EngineResponse = {
    name: string;
    severity: Severity;
    description: string;
    risks: Risk[];
};
