import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';

import { PopupPanel } from './PopupPanel';
import { logPageView } from '../../shared/logs';

import '../../shared/reset.css';
import '../../shared/font.css';
import 'overlayscrollbars/overlayscrollbars.css';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

function Popup() {
    useEffect(() => {
        logPageView('Popup');
    }, []);

    return (
        <OverlayScrollbarsComponent defer style={{ width: '376px', height: '600px' }}>
            <PopupPanel />
        </OverlayScrollbarsComponent>
    );
}

const container = window.document.querySelector('#app-container');
const root = createRoot(container as Element);
root.render(<Popup />);
