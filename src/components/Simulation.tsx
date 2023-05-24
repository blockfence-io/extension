import React from 'react';

import { SimulatedTransaction, TransactionSimulation } from '../types/api';
import { getFormattedNumber } from '../helpers/getFormattedNumber';
import TxIcon from '../assets/icons/tx-icon.svg';

import * as Styled from './Simulation.styles';

enum Direction {
    In = 'In',
    Out = 'Out',
}
interface SimulationProps {
    simulation: TransactionSimulation;
}

const validTransaction = (transaction?: SimulatedTransaction) => {
    return transaction && transaction.amount > 0 && transaction.symbol;
};

const getAmountString = (amount?: number, symbol?: string) => {
    return amount ? `${getFormattedNumber(amount)} ${symbol}` : '0';
};

const shouldShowUSD = (amount?: number) => {
    return amount && amount > 0;
};

export function Simulation({ simulation }: SimulationProps) {
    const validOutgoing = validTransaction(simulation.outgoing_transaction);
    const validIncoming = validTransaction(simulation.incoming_transaction);
    const showGas = simulation.gas_used && simulation.gas_symbol && simulation.gas_usd;

    return (
        <>
            <Styled.Container>
                {simulation.outgoing_transaction && validOutgoing && (
                    <TransactionPart direction={Direction.Out} transaction={simulation.outgoing_transaction} />
                )}
                {validOutgoing && validIncoming && (
                    <Styled.Icon>
                        <TxIcon />
                    </Styled.Icon>
                )}
                {simulation.incoming_transaction && validIncoming && (
                    <TransactionPart direction={Direction.In} transaction={simulation.incoming_transaction} />
                )}
            </Styled.Container>

            {showGas && (
                <Styled.GasContainer>
                    <div>estimated gas</div>
                    <div style={{ fontWeight: 'bold' }}>
                        {getAmountString(simulation.gas_used, simulation.gas_symbol)}
                    </div>
                    {simulation.gas_usd && <div>${getFormattedNumber(simulation.gas_usd)}</div>}
                </Styled.GasContainer>
            )}
        </>
    );
}

interface TransactionPartProps {
    direction: Direction;
    transaction: SimulatedTransaction;
}

function TransactionPart({ direction, transaction }: TransactionPartProps) {
    return (
        <Styled.SectionContainer>
            <Styled.Direction>{direction}</Styled.Direction>
            <Styled.Amount>
                {transaction.logo && <img src={transaction.logo} width='22' />}
                {getAmountString(transaction.amount, transaction.symbol)}
            </Styled.Amount>
            {shouldShowUSD(transaction.usd) && (
                <Styled.EstimatedValue color={direction == Direction.In ? 'Green' : 'Red'}>
                    <div>${getFormattedNumber(transaction.usd)}</div>
                </Styled.EstimatedValue>
            )}
        </Styled.SectionContainer>
    );
}
