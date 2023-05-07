import React from 'react';
import { TransactionSimulation } from '../types/api';
import { Collapsable } from './UI/Collapsable';
import { UilExchangeAlt } from '@iconscout/react-unicons'

import * as Styled from './Simulation.styles';

interface SimulationProps {
    simulation?: TransactionSimulation;
    defaultState: boolean;
}

const getAmountString = (amount?: string, symbol?: string) => {
    return amount ? amount + " " + symbol : "0";
}

export function Simulation({ simulation, defaultState = false }: SimulationProps) {
    return (
        
        <Collapsable title={'Transaction Simulation'} icon={<UilExchangeAlt />} defaultState={defaultState}>            
            <Styled.Container>
                <Styled.SectionContainer>
                    <Styled.Bold>
                        {"Out"}
                    </Styled.Bold>
                    <Styled.CenteredIconWithText>
                        {getAmountString(simulation?.outgoing_transaction.amount, simulation?.outgoing_transaction.symbol)}
                        {simulation?.outgoing_transaction.logo && <img src={simulation.outgoing_transaction.logo} width='18' />}
                    </Styled.CenteredIconWithText>
                </Styled.SectionContainer>
                <Styled.SectionContainer>
                    <Styled.Bold>
                        {"In"}
                    </Styled.Bold>
                    <Styled.CenteredIconWithText>
                        {getAmountString(simulation?.incoming_transaction.amount, simulation?.incoming_transaction.symbol)}
                        {simulation?.incoming_transaction.logo && <img src={simulation.incoming_transaction.logo} width='18' />}
                    </Styled.CenteredIconWithText>
                </Styled.SectionContainer>
            </Styled.Container>
            {simulation?.gas_used && "Gas used: " + parseInt(simulation.gas_used)}
        </Collapsable>
    );
}
