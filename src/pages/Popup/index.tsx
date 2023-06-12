import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';

import * as Layout from '../../components/Layout.styles';
import { PopupPanel } from './PopupPanel';
import { logPageView } from '../../shared/logs';

import '../../shared/reset.css';
import '../../shared/font.css';

function Popup() {
    useEffect(() => {
        logPageView('Popup');
    }, []);

    return <PopupPanel />;
}

const container = window.document.querySelector('#app-container');
const root = createRoot(container as Element);
root.render(<Popup />);
