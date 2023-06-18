import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { InfoTooltip } from './InfoTooltip';

const meta: Meta<typeof InfoTooltip> = {
    component: InfoTooltip,
};
export default meta;
type Story = StoryObj<typeof InfoTooltip>;

export const Primary: Story = {
    args: {
        name: 'name',
        tooltipText: 'this is some tooltipText...',
    },
};

export const VeryLongText: Story = {
    args: {
        name: 'name',
        tooltipText:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur, magna nec tristique venenatis, sapien lacus condimentum est, vitae sodales nulla purus in turpis. Proin a maximus dolor, non sollicitudin metus. In luctus congue nunc quis tincidunt. Aenean in dolor leo. Nullam ullamcorper, sapien non lacinia mattis, dolor ipsum accumsan ex, quis dictum mauris felis ut orci. Proin ullamcorper mi non mattis dignissim. Sed ut euismod nunc, eget luctus libero. Aliquam at tristique dolor, non imperdiet lacus. Ut quis risus in mi interdum vehicula sed vel nibh. Phasellus fermentum placerat lectus, sed finibus mauris porta vel. Sed pretium justo non gravida malesuada.',
    },
};
