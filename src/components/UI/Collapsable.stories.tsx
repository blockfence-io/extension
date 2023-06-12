import type { Meta } from '@storybook/react';
import React from 'react';
import { Collapsable } from './Collapsable';
import { UilLamp } from '@iconscout/react-unicons';
import SpotlightIcon from '../../assets/icons/spotlight.svg';

const meta: Meta<typeof Collapsable> = {
    component: Collapsable,
};

export default meta;

export const Normal = () => (
    <div style={{ width: '350px' }}>
        <Collapsable title='Spotlight' icon={<UilLamp />}>
            The ABC Token Contract is a smart contract that enables the creation and management of a custom token on the
            Ethereum blockchain. It includes important functions such as the Constructor for initializing parameters and
            creating token supply, the Transfer function for transferring tokens between accounts. The Approval function
            for approving token spending by another account, and the TransferFrom function for approved token transfers.
            The contract is well-written and secure, following best practices in smart contract development.
        </Collapsable>
    </div>
);

export const WithSubtitle = () => (
    <div style={{ width: '350px' }}>
        <Collapsable title='Spotlight' subtitle='ABCD' icon={<UilLamp />}>
            The ABC Token Contract is a smart contract that enables the creation and management of a custom token on the
            Ethereum blockchain. It includes important functions such as the Constructor for initializing parameters and
            creating token supply, the Transfer function for transferring tokens between accounts. The Approval function
            for approving token spending by another account, and the TransferFrom function for approved token transfers.
            The contract is well-written and secure, following best practices in smart contract development.
        </Collapsable>
    </div>
);
export const WithoutIcon = () => (
    <div style={{ width: '350px' }}>
        <Collapsable title='Spotlight' subtitle='ABCD'>
            The ABC Token Contract is a smart contract that enables the creation and management of a custom token on the
            Ethereum blockchain. It includes important functions such as the Constructor for initializing parameters and
            creating token supply, the Transfer function for transferring tokens between accounts. The Approval function
            for approving token spending by another account, and the TransferFrom function for approved token transfers.
            The contract is well-written and secure, following best practices in smart contract development.
        </Collapsable>
    </div>
);

export const Multiple = () => (
    <div style={{ width: '350px' }}>
        <Collapsable title='Spotlight' icon={<SpotlightIcon />}>
            The ABC Token Contract is a smart contract that enables the creation and management of a custom token on the
            Ethereum blockchain. It includes important functions such as the Constructor for initializing parameters and
            creating token supply, the Transfer function for transferring tokens between accounts. The Approval function
            for approving token spending by another account, and the TransferFrom function for approved token transfers.
            The contract is well-written and secure, following best practices in smart contract development.
        </Collapsable>
        <Collapsable title='Spotlight' icon={<UilLamp />}>
            The ABC Token Contract is a smart contract that enables the creation and management of a custom token on the
            Ethereum blockchain. It includes important functions such as the Constructor for initializing parameters and
            creating token supply, the Transfer function for transferring tokens between accounts. The Approval function
            for approving token spending by another account, and the TransferFrom function for approved token transfers.
            The contract is well-written and secure, following best practices in smart contract development.
        </Collapsable>
        <Collapsable title='Spotlight'>
            The ABC Token Contract is a smart contract that enables the creation and management of a custom token on the
            Ethereum blockchain. It includes important functions such as the Constructor for initializing parameters and
            creating token supply, the Transfer function for transferring tokens between accounts. The Approval function
            for approving token spending by another account, and the TransferFrom function for approved token transfers.
            The contract is well-written and secure, following best practices in smart contract development.
        </Collapsable>
        <Collapsable title='Spotlight'>
            The ABC Token Contract is a smart contract that enables the creation and management of a custom token on the
            Ethereum blockchain. It includes important functions such as the Constructor for initializing parameters and
            creating token supply, the Transfer function for transferring tokens between accounts. The Approval function
            for approving token spending by another account, and the TransferFrom function for approved token transfers.
            The contract is well-written and secure, following best practices in smart contract development.
        </Collapsable>
    </div>
);

export const OpenByDefault = () => (
    <div style={{ width: '350px' }}>
        <Collapsable title='Spotlight' icon={<SpotlightIcon />} defaultState={true}>
            The ABC Token Contract is a smart contract that enables the creation and management of a custom token on the
            Ethereum blockchain. It includes important functions such as the Constructor for initializing parameters and
            creating token supply, the Transfer function for transferring tokens between accounts. The Approval function
            for approving token spending by another account, and the TransferFrom function for approved token transfers.
            The contract is well-written and secure, following best practices in smart contract development.
        </Collapsable>

        <Collapsable title='Spotlight'>
            The ABC Token Contract is a smart contract that enables the creation and management of a custom token on the
            Ethereum blockchain. It includes important functions such as the Constructor for initializing parameters and
            creating token supply, the Transfer function for transferring tokens between accounts. The Approval function
            for approving token spending by another account, and the TransferFrom function for approved token transfers.
            The contract is well-written and secure, following best practices in smart contract development.
        </Collapsable>
    </div>
);
