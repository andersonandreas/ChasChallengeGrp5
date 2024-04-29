import React, { useState, useEffect } from "react";

function SaveValue(key, initialValue) {
    const savedValue = JSON.parse(localStorage.getItem(key));
    if (savedValue) return savedValue;
    if (initialValue instanceof Function) return initialValue();
    return initialValue;
};

export const useLocStorage = (key, initialValue = null) => {
    const [selected, setSelected] = useState(() => {
        return SaveValue(key, initialValue);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(selected));
    }, [key, selected]);

    const handleSelection = (value) => {
        setSelected(value);
    }

    return [selected, handleSelection];
};