import React, { useState } from 'react';

const useSelection = (initialState = null) => {
    const [selected, setSelected] = useState(initialState);

    const handleSel = (value) => {
        setSelected(value);
    };

    return [selected, handleSel];
};

const Toggle = ({ value, selected, handleSel, handleChoice }) => {
    const buttonStyle = selected ? { backgroundColor: 'blue', color: 'white' } : {};

    const handleClick = () => {
        handleSel(value);
        handleChoice(value);
    }

    return (
        <button style={buttonStyle} onClick={handleClick}>{value}</button>
    )
}
export { useSelection, Toggle };