import { useState, useEffect } from 'react';

export function usePersistentState<S>(
    uniqueId: string,
    initialState: S | undefined
): [S | undefined, (value: S) => void] {
    const [value, setValue] = useState(initialState);

    async function restore() {
        const storage = await chrome.storage.local.get(uniqueId);
        const state = storage[uniqueId];
        if (state) {
            setValue(state);
        }
    }

    function set(value: S): void {
        setValue(value);
        chrome.storage.local.set({
            [uniqueId]: value,
        });
    }

    useEffect(() => {
        restore();
    }, []);

    return [value, set];
}
