import { Severity } from '../types/api';
import { UilExclamationTriangle, UilExclamationCircle, UilSmile } from '@iconscout/react-unicons';
import { Icon } from '@iconscout/react-unicons';

export const fieldBorder = '#DADCE0';

export const riskText: { [key in Severity]: string } = {
    NONE: '#351254',
    LOW: '#dfc700',
    MEDIUM: '#FF7A00',
    HIGH: '#D80000',
    CRITICAL: '#D80000',
};

export const riskBackground: { [key in Severity]: string } = {
    NONE: 'linear-gradient(95.2deg, #00b903 1.02%, #00d703 100%)',
    LOW: 'linear-gradient(95.2deg, #ceb800 1.02%, #dfc700 100%)',
    MEDIUM: 'linear-gradient(95.2deg, #FF7A00 1.02%, #FF8B24 100%)',
    HIGH: 'linear-gradient(95.2deg, #BE0404 1.02%, #D80000 100%)',
    CRITICAL: 'linear-gradient(95.2deg, #BE0404 1.02%, #D80000 100%)',
};

export const riskIcons: { [key in Severity]: Icon | undefined } = {
    NONE: undefined,
    LOW: UilSmile,
    MEDIUM: UilExclamationCircle,
    HIGH: UilExclamationTriangle,
    CRITICAL: UilExclamationTriangle,
};
