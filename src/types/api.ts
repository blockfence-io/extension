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

export type EngineResponse = {
    name: string;
    severity: Severity;
    isContract: boolean;
    risks: Risk[];
};

export type ChatResponse = {
    description: string;
};
