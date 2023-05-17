import React from 'react';
import { SimulatedTransaction, TransactionSimulation } from '../types/api';
import { Collapsable } from './UI/Collapsable';
import { UilExchangeAlt } from '@iconscout/react-unicons'

import * as Styled from './Simulation.styles';
import { getFormattedNumber } from '../helpers/getFormattedNumber';

interface SimulationProps {
    simulation?: TransactionSimulation;
    defaultState: boolean;
}

const shouldShowSection = (transaction?: SimulatedTransaction) => {
    return transaction != null && transaction.amount > 0 && transaction.symbol
}

const getAmountString = (amount?: number, symbol?: string) => {
    return amount ? `${getFormattedNumber(amount)} ${symbol}` : "0";
}

const shouldShowUSD = (amount?: number) => {
    return amount && amount > 0
}

export function Simulation({ simulation, defaultState = false }: SimulationProps) {
    return (
        
        <Collapsable title="Transaction Simulation" icon={<UilExchangeAlt />} defaultState={defaultState}>            
            <Styled.Container>
                {shouldShowSection(simulation?.outgoing_transaction) &&
                <Styled.SectionContainer>
                    <Styled.Bold>{"Out"}</Styled.Bold>
                    <Styled.CenteredIconWithText>
                        {getAmountString(simulation?.outgoing_transaction.amount, simulation?.outgoing_transaction.symbol)}
                        {simulation?.outgoing_transaction.logo && <img src={simulation.outgoing_transaction.logo} width='18' />}
                        {shouldShowUSD(simulation?.outgoing_transaction.usd) == true &&
                            <div>${getFormattedNumber(simulation?.outgoing_transaction.usd)}</div>
                        }
                    </Styled.CenteredIconWithText>
                </Styled.SectionContainer>
                }
                {shouldShowSection(simulation?.incoming_transaction) &&
                <Styled.SectionContainer>
                    <Styled.Bold>{"In"}</Styled.Bold>
                    <Styled.CenteredIconWithText>
                        {getAmountString(simulation?.incoming_transaction.amount, simulation?.incoming_transaction.symbol)}
                        {simulation?.incoming_transaction.logo && <img src={simulation.incoming_transaction.logo} width='18' />}
                        {shouldShowUSD(simulation?.incoming_transaction.usd) == true &&
                            <div>${getFormattedNumber(simulation?.incoming_transaction.usd)}</div>
                        }
                    </Styled.CenteredIconWithText>
                </Styled.SectionContainer>
                }
            </Styled.Container>
            {/* <Styled.CenteredIconWithText>
                <div>Gas used: {getAmountString(simulation?.gas_used, simulation?.gas_symbol)}</div>
                {simulation?.gas_usd && <div>${getFormattedNumber(simulation?.gas_usd)}</div>}
            </Styled.CenteredIconWithText> */}
        </Collapsable>
    );
}
