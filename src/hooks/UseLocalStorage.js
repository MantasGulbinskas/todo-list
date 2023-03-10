import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [value] = useState(() => {
        const getKey = window.localStorage.key(key)
        const item = window.localStorage.getItem(getKey);
        return item ? JSON.parse(item) : initialValue;
    });

    return [value];
};
