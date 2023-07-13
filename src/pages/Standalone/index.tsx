import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';

import { PopupPanel } from '../Popup/PopupPanel';
import { logPageView } from '../../shared/logs';

import '../../shared/reset.css';
import '../../shared/font.css';

function App() {
    useEffect(() => {
        logPageView('Standalone');
    }, []);

    return <PopupPanel hideAlpha hideSettings fullscreen />;
}

const container = window.document.querySelector('#app-container');
const root = createRoot(container as Element);
root.render(<App />);
