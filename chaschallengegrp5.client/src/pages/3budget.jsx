import React from 'react';
import { Link } from 'react-router-dom';
import { useAnswers } from '../components/AnswerContext';

function Budget() {
    const { answers, setAnswers } = useAnswers();
    
    const handleBudgetSelect = (choice) => {
        setAnswers({ ...answers, budget: [...answers.budget, choice]})
    };

    return (
        <div>
            <h1>What Is Your Budget?</h1>
            <div>
                <button type="button" onClick={() => handleBudgetSelect('low')}>Low</button>
                <button type="button" onClick={() => handleBudgetSelect('medium')}>Medium</button>
                <button type="button" onClick={() => handleBudgetSelect('high')}>High</button>
                <button type="button" onClick={() => handleBudgetSelect('none_of_your_business')}>None of Your Business</button>
            </div>
            <div>
                <Link to="/party"><button type="button">Back</button></Link>
                <Link to="/activites"><button type="button">Next</button></Link>
            </div>
        </div>
    );
}
export default Budget;