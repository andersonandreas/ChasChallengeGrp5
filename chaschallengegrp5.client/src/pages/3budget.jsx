import React from 'react';
import { Link } from 'react-router-dom';
import { Toggle } from '../components/button';
import { useLocStorage } from '../components/LocStorage';
import { useAnswers } from '../components/AnswerContext';

function Budget() {
    const { answers, setAnswers } = useAnswers();

    const handleBudgetSelect = (choice) => {
        const updatedBudget = answers.budget.includes(choice) ?
            answers.budget.filter(item => item !== choice) :
            [...answers.budget, choice];
        setAnswers({
            ...answers,
            budget: updatedBudget
        });
        handleSel(choice);
    };

    return (
        <div>
            <h1>What Is Your Budget?</h1>
            <div className='btnContainer'>
                {['Low', 'Medium', 'High', 'None of your business'].map(choice => (
                    <Toggle
                        key={choice}
                        value={choice}
                        handleChoice={() => handleBudgetSelect(choice)}
                    />
                ))}
            </div>
            <div>
                <Link to="/party"><button type="button">Back</button></Link>
                <Link to="/activites"><button type="button">Next</button></Link>
            </div>
        </div>
    );
};

export default Budget;