import React, { useState } from 'react';

const useSelection = (initialState = null) => {
    const [selected, setSelected] = useState(initialState);

    const handleSel = (value) => {
        setSelected(value);
    };

    return [selected, handleSel];
};

const Toggle = ({ value, selected, handleSel }) => {
    const buttonStyle = selected ? { backgroundColor: 'blue', color: 'white' } : {};


    return (
        <button style={buttonStyle} onClick={() => handleSel(value)}>{value}</button>
    )
}
export { useSelection, Toggle };