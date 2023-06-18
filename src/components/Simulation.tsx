import React from 'react';

import { SimulatedTransaction, TransactionSimulation } from '../types/api';
import { getFormattedNumber } from '../helpers/getFormattedNumber';
import TxIcon from '../assets/icons/tx-icon.svg';

import * as Styled from './Simulation.styles';
import { InfoTooltip } from './UI/InfoTooltip';

enum EntryType {
    In = 'In',
    Out = 'Out',
    Gas = 'Gas',
}
interface SimulationProps {
    simulation: TransactionSimulation;
}

const validTransaction = (transaction?: SimulatedTransaction) => {
    return transaction && transaction.amount > 0 && transaction.symbol;
};

const shouldShowUSD = (amount?: number) => {
    return amount && amount > 0;
};

export function Simulation({ simulation }: SimulationProps) {
    const validOutgoing = validTransaction(simulation.outgoing_transaction);
    const validIncoming = validTransaction(simulation.incoming_transaction);

    let totalConversion = 0;
    if (simulation.outgoing_transaction?.usd) totalConversion += simulation.outgoing_transaction.usd;
    if (simulation.outgoing_gas?.usd) totalConversion += simulation.outgoing_gas.usd;

    return (
        <Styled.Container>
            {simulation.outgoing_transaction && validOutgoing && (
                <SimulationEntry entryType={EntryType.Out} transaction={simulation.outgoing_transaction} />
            )}
            {simulation.outgoing_gas && (
                <SimulationEntry entryType={EntryType.Gas} transaction={simulation.outgoing_gas} />
            )}
            {validOutgoing && validIncoming && (
                <Styled.Divider>
                    <TxIcon />
                </Styled.Divider>
            )}
            {simulation.incoming_transaction && validIncoming && (
                <SimulationEntry entryType={EntryType.In} transaction={simulation.incoming_transaction} />
            )}
            <Styled.Total>
                Total Conversion: <Styled.TotalValue>${getFormattedNumber(totalConversion)}</Styled.TotalValue>
            </Styled.Total>
        </Styled.Container>
    );
}

interface SimulationEntryProps {
    transaction: SimulatedTransaction;
    entryType: EntryType;
}

function SimulationEntry({ transaction, entryType }: SimulationEntryProps) {
    return (
        <Styled.SectionContainer>
            <Styled.Logo>{transaction.logo && <img src={transaction.logo} width='18' />}</Styled.Logo>
            <Styled.Symbol>
                {transaction.symbol}
                {entryType === EntryType.Gas && <Styled.Hint>Gas</Styled.Hint>}
                {entryType === EntryType.Gas && (
                    <InfoTooltip name='simulation' tooltipText='Gas prices are estimated' />
                )}
            </Styled.Symbol>

            <Styled.Amount>{getFormattedNumber(transaction.amount || 0)}</Styled.Amount>

            <Styled.EstimatedValue>
                {shouldShowUSD(transaction.usd) && `$${getFormattedNumber(transaction.usd)}`}
            </Styled.EstimatedValue>

            {entryType === EntryType.In ? (
                <Styled.FakeIcon color='Green'>+</Styled.FakeIcon>
            ) : (
                <Styled.FakeIcon color='Red'>-</Styled.FakeIcon>
            )}
        </Styled.SectionContainer>
    );
}
