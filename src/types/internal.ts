export type TransactionEvent = {
    triggerType: string;
    requestType: string;
    payload: unknown;
};

export type UpdateChainIDEvent = {
    chainId: number;
};

export enum InternalMessageType {
    TransactionEvent,
    UpdateChainIDEvent,
}

export type InternalMessage = {
    type: InternalMessageType;
    event: TransactionEvent | UpdateChainIDEvent;
};
