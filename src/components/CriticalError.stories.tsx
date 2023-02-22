import React, { useState } from 'react';
import { ErrorFallback } from './CriticalError';

export const Default = () => (
    <div style={{ width: '370px', height: '400px', border: '1px black solid' }}>
        <ErrorFallback />
    </div>
);
