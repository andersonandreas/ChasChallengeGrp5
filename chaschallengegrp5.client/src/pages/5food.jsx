import React from 'react';
import { Link } from 'react-router-dom';
import { useAnswers } from '../components/AnswerContext';

function Food() {
    const { answers, setAnswers } = useAnswers();

    const handleFoodSelect = (choice) => {
        setAnswers({ ...answers, food: [...answers.food, choice]})
    };

    return (
        <div>
            <h1>What Kind of Food Do You Want?</h1>
            <div>
                <button type="button" onClick={() => handleFoodSelect('vegan')}>Vegan</button>
                <button type="button" onClick={() => handleFoodSelect('meat_fish')}>Meat/Fish</button>
                <button type="button" onClick={() => handleFoodSelect('pizza')}>Pizza</button>
                <button type="button" onClick={() => handleFoodSelect('i_eat_everything')}>I Eat Everything</button>
            </div>
            <div>
                <Link to="/activities"><button type="button">Back</button></Link>
                <Link to="/events"><button type="button">Next</button></Link>
            </div>
        </div>
    );
}
export default Food;