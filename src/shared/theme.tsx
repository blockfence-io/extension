import { Severity } from '../types/api';
import { Icon } from '@iconscout/react-unicons';

import GaugeLow from '../assets/icons/gauge-low.svg';
import GaugeMedium from '../assets/icons/gauge-medium.svg';
import GaugeHigh from '../assets/icons/gauge-high.svg';

export const primaryColor = '#3A0DA3';
export const primaryBackground = '#f0f6ff';

export const errorColor = '#eb0000';
export const errorBackground = `${errorColor}0C`;

export const inputBorderColor = '#777777';
export const dividerBorderColer = '#D9D9D9';
export const fieldBorder = '#DADCE0';

export const linkColor = '#006BFF';

export const riskText: { [key in Severity]: string } = {
    NONE: '#00B341',
    LOW: '#dfc700',
    MEDIUM: '#dfc700',
    HIGH: '#D80000',
};

export const riskBackground: { [key in Severity]: string } = {
    NONE: 'linear-gradient(95.2deg, #00b903 1.02%, #00d703 100%)',
    LOW: 'linear-gradient(95.2deg,#ce9000 1.02%,#efe111 100%)',
    MEDIUM: 'linear-gradient(95.2deg,#ce9000 1.02%,#efe111 100%)',
    HIGH: 'linear-gradient(95.2deg, #BE0404 1.02%, #D80000 100%)',
};

export const riskBackgroundFlat: { [key in Severity]: string } = {
    NONE: '#00b903',
    LOW: '#e6cb0b',
    MEDIUM: '#e6cb0b',
    HIGH: '#BE0404',
};

export const riskIcons: { [key in Severity]: Icon | undefined } = {
    NONE: GaugeLow,
    LOW: GaugeMedium,
    MEDIUM: GaugeMedium,
    HIGH: GaugeHigh,
};

export const mediaWidth = {
    mobile: '375px',
    tablet: '768px',
    smallLaptop: '1200px',
    largeDisplay: '1440px',
};
