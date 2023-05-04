import React from 'react';
import { TransactionSimulation } from '../types/api';
import { Collapsable } from './UI/Collapsable';

import * as Styled from './Simulation.styles';

interface SimulationProps {
    simulation: TransactionSimulation;
    defaultState?: boolean;
}

export function Simulation({ simulation, defaultState = false }: SimulationProps) {
    const logo = <img src={'../assets/logo.png'} width='24' />;

    return (
        <Collapsable title={'Transaction Simulation'} icon={logo} defaultState={defaultState}>
            <Styled.CenteredIconWithText>
            <Styled.Bold>{"Out: "}</Styled.Bold>
                {simulation.outgoing_transaction.amount + " " + simulation.outgoing_transaction.symbol}
                <img src={simulation.outgoing_transaction.logo} width='18' />
            </Styled.CenteredIconWithText>
            <Styled.CenteredIconWithText>
                <Styled.Bold>{"In: "}</Styled.Bold>
                {simulation.incoming_transaction.amount + " " + simulation.incoming_transaction.symbol}
                <img src={simulation.incoming_transaction.logo} width='18' />
            </Styled.CenteredIconWithText>
        </Collapsable>
    );
}
