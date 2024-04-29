import React from 'react';
import { Link } from 'react-router-dom';
import { useAnswers } from '../components/AnswerContext';
import { Toggle } from '../components/button';
import { useLocStorage } from '../components/LocStorage';

function Food() {
    const [selectedOption, handleSel] = useLocStorage('foodSel');
    const [formData, setFormData] = useLocStorage('formData', {
        country: '',
        city: '',
        startDate: '',
        endDate: '',
        party: [],
        budget: [],
        Activities: [],
        Food: [],
    });
    const { answers, setAnswers } = useAnswers();

    const handleFoodSelect = (choice) => {
        setFormData({
            ...formData,
            food: formData.food ? [...formData.food, choice] : [choice]
        });
        setAnswers({
            ...answers,
            food: answers.food ? [...answers.food, choice] : [choice]
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
                        selected={selectedOption === choice}
                        handleSel={handleSel}
                        handleChoice={handleFoodSelect}
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