import React, { createContext, useContext, useState, useEffect } from 'react';
const ToggleContext = createContext();
const ToggleProvider = ({ children }) => {
    const [toggles, setToggles] = useState({});

    const setToggle = (key, value) => {
        setToggles(prev => ({ ...prev, [key]: value }));
        localStorage.setItem(`toggle-${key}`, JSON.stringify(value));
    };

    const clearToggles = () => {
        Object.keys(toggles).forEach(key => {
            localStorage.removeItem(`toggle-${key}`);
        });
        setToggles({});
    };

    return (
        <ToggleContext.Provider value={{ toggles, setToggle, clearToggles }}>
            {children}
        </ToggleContext.Provider>
    );
};
const Toggle = ({ value }) => {
    const { toggles, setToggle } = useToggleContext();

    const handleClick = () => {
        setToggle(value, !toggles[value]);
    };

    return (
        <button className={toggles[value] ? 'selected' : ''} onClick={handleClick}>
            {value}
        </button>
    );
};

export const useToggleContext = () => useContext(ToggleContext);
export { Toggle, ToggleProvider };