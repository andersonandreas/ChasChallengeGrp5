import React, { useEffect, useState } from 'react';

const useSelection = (initialState = null) => {
    const [selected, setSelected] = useState(initialState);

    const handleSel = (value) => {
        setSelected(value);
    };

    return [selected, handleSel];
};

const Toggle = ({ value, handleSel, handleChoice }) => {
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        const storedValue = localStorage.getItem('selectedToggle');
        setSelected(storedValue === value);
    }, [value]);

    const handleClick = () => {
        const newValue = !selected;
        setSelected(newValue);
        handleSel(newValue ? value : null);
        handleChoice(value);
        localStorage.setItem('selectedToggle', newValue ? value : null);
    };

    return (
        <button
            className={selected ? 'selected' : ''}
            onClick={handleClick}
        >
            {value}
        </button>
    );
};
export { useSelection, Toggle };


// Istället för local storage och button interaktivitet
//allt sparat i localstorage ska visas som itryckt