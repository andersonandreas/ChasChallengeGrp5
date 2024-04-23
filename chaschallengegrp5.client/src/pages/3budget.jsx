import React from 'react';
import { Link } from 'react-router-dom';
import { useSelection, Toggle } from '../components/button';
function Budget() {
    const handleBudgetChange = (value) => {
        // budget change logic here :)
    };

    const [selectedOption, handleSel] = useSelection();

    return (
        <div>
            <h1>What Is Your Budget?</h1>
            <div className='btnContainer'>
                {['Low', 'Medium', 'High', 'None of your buisness'].map(option => (
                    <Toggle
                        key={option}
                        value={option}
                        selected={selectedOption === option}
                        handleSel={handleSel}
                    />
                ))}
                {/* <button type="button" onClick={() => handleBudgetChange('low')}>Low</button>
                <button type="button" onClick={() => handleBudgetChange('medium')}>Medium</button>
                <button type="button" onClick={() => handleBudgetChange('high')}>High</button>
                <button type="button" onClick={() => handleBudgetChange('none_of_your_business')}>None of Your Business</button> */}
            </div>
            <div>
                <Link to="/party"><button type="button">Back</button></Link>
                <Link to="/activites"><button type="button">Next</button></Link>
            </div>
        </div>
    );
}
export default Budget;