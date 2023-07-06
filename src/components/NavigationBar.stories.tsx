import React, { useState } from 'react';
import type { Meta } from '@storybook/react';
import { Panel } from './UI/Panel';

import { NavigationBar } from './NavigationBar';

const meta: Meta<typeof NavigationBar> = {
    component: NavigationBar,
};

export const URL = () => {
    function handleChange(state) {
        console.log(state);
    }

    return (
        <Panel style={{ width: '330px' }}>
            <NavigationBar onBack={() => {}} url='http://www.google.com/this/is/some/long/address' />
        </Panel>
    );
};

export const Address = () => {
    function handleChange(state) {
        console.log(state);
    }

    return (
        <Panel style={{ width: '330px' }}>
            <NavigationBar onBack={() => {}} network='0x1' address='0x9008d19f58aabd9ed0d60971565aa8510560ab41' />
        </Panel>
    );
};

export const NoBackWithAll = () => {
    function handleChange(state) {
        console.log(state);
    }

    return (
        <Panel style={{ width: '330px' }}>
            <NavigationBar
                network='1'
                address='0x9008d19f58aabd9ed0d60971565aa8510560ab41'
                url='http://www.google.com/this/is/some/long/address'
            />
        </Panel>
    );
};

export const CompactMode = () => {
    function handleChange(state) {
        console.log(state);
    }

    return (
        <Panel style={{ width: '330px' }}>
            <NavigationBar
                compact
                address='0x9008d19f58aabd9ed0d60971565aa8510560ab41'
                url='http://www.google.com/this/is/some/long/address'
            />
        </Panel>
    );
};

export default meta;
