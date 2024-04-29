import React from 'react';
import { Link } from 'react-router-dom';
import { useAnswers } from '../components/AnswerContext';
import { Toggle } from '../components/button';
import { useLocStorage } from '../components/LocStorage';

function Activities() {
    const { answers, setAnswers } = useAnswers();

    const handleActivitiesSelect = (choice) => {
        const updatedActivities = answers.activities.includes(choice) ?
            answers.activities.filter(item => item !== choice) :
            [...answers.activities, choice];
        setAnswers({
            ...answers,
            activities: updatedActivities
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
                        handleChoice={() => handleBudgetSelect(choice)}
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