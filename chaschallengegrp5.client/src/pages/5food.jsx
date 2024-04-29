import React from 'react';
import { Link } from 'react-router-dom';
import { useAnswers } from '../components/AnswerContext';
import { Toggle } from '../components/button';
import { useLocStorage } from '../components/LocStorage';

function Food() {
    const { answers, setAnswers } = useAnswers();

    const handleFoodSelect = (choice) => {
        const updatedFood = answers.food.includes(choice) ?
            answers.food.filter(item => item !== choice) :
            [...answers.food, choice];
        setAnswers({
            ...answers,
            food: updatedFood
        });
        handleSel(choice);
    };

    return (
        <div>
            <h1>What Kind of Food Do You Want?</h1>
            <div className='btnContainer'>
                {['Vegan', 'Meat & Fish', 'Pizza', 'i eat everything'].map(choice => (
                    <Toggle
                        key={choice}
                        value={choice}
                        handleChoice={() => handleBudgetSelect(choice)}
                    />
                ))}
            </div>
            <div>
                <Link to="/activites"><button type="button">Back</button></Link>
                <Link to="/events"><button type="button">Next</button></Link>
            </div>
        </div>
    );
}
export default Food;