import React from 'react';
import { Link } from 'react-router-dom';
import { useAnswers } from '../components/AnswerContext';
import { Toggle } from '../components/button';
import { useLocStorage } from '../components/LocStorage';

function Activities() {
    const [selectedOption, handleSel] = useLocStorage('activitiesSel');
    const [formData, setFormData] = useLocStorage('formData', {
        country: '',
        city: '',
        startDate: '',
        endDate: '',
        party: [],
        budget: [],
        Activities: [],
    });
    const { answers, setAnswers } = useAnswers();

    const handleActivitiesSelect = (choice) => {
        setFormData({
            ...formData,
            activities: formData.activities ? [...formData.activities, choice] : [choice]
        });
        setAnswers({
            ...answers,
            activities: answers.activities ? [...answers.activities, choice] : [choice]
        });
        handleSel(choice);
    };

    return (
        <div>
            <h1>What Activities Are You Interested In?</h1>
            <div className='btnContainer'>
                {['Stränder', 'Nattliv', 'Mat', 'Adrenalin Höjare', 'Sevärdigheter', 'Evenemang', 'Nöjesparker'].map(choice => (
                    <Toggle
                        key={choice}
                        value={choice}
                        selected={selectedOption === choice}
                        handleSel={handleSel}
                        handleChoice={handleActivitiesSelect}
                    />
                ))}
            </div>
            <div>
                <Link to="/budget"><button type="button">Back</button></Link>
                <Link to="/food"><button type="button">Next</button></Link>
            </div>
        </div>
    );
}
export default Activities;