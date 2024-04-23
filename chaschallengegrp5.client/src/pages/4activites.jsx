import React from 'react';
import { Link } from 'react-router-dom';
import { useAnswers } from '../components/AnswerContext';

function Activities() {
    const { answers, setAnswers } = useAnswers();

    const handleActivitiesSelect = (choice) => {
        setAnswers({ ...answers, activities: [...answers.activities, choice]})
    };

    return (
        <div>
            <h1>What Activities Are You Interested In?</h1>
            <div>
                <button type="button" onClick={() => handleActivitiesSelect('stränder')}>Stränder</button>
                <button type="button" onClick={() => handleActivitiesSelect('nattliv')}>Nattliv</button>
                <button type="button" onClick={() => handleActivitiesSelect('mat')}>Mat</button>
                <button type="button" onClick={() => handleActivitiesSelect('adrenalin_höjare')}>Adrenalin Höjare</button>
                <button type="button" onClick={() => handleActivitiesSelect('sevärdigheter')}>Sevärdigheter</button>
                <button type="button" onClick={() => handleActivitiesSelect('evenemang')}>Evenemang</button>
                <button type="button" onClick={() => handleActivitiesSelect('nöjesparker')}>Nöjesparker</button>
            </div>
            <div>
                <Link to="/budget"><button type="button">Back</button></Link>
                <Link to="/food"><button type="button">Next</button></Link>
            </div>
        </div>
    );
}
export default Activities;