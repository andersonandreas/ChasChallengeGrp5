import React from 'react';
import { Link } from 'react-router-dom';
import { useAnswers } from '../components/AnswerContext';
import { Toggle } from '../components/button';
import { useLocStorage } from '../components/LocStorage';

function Events() {
    const { answers, setAnswers } = useAnswers();

    const handleEventSelect = (choice) => {
        const updatedEvent = answers.events.includes(choice) ?
            answers.events.filter(item => item !== choice) :
            [...answers.events, choice];
        setAnswers({
            ...answers,
            events: updatedEvent
        });
        handleSel(choice);
    };
    return (
        <div>
            <h1>What kind of events are you interested in?</h1>
            <div className='btnContainer'>
                {['Teather', 'Stand up', 'Sport', 'Everything'].map(choice => (
                    <Toggle
                        key={choice}
                        value={choice}
                        handleChoice={() => handleBudgetSelect(choice)}
                    />
                ))}
            </div>
            <div>
                <Link to="/food"><button type="button">Back</button></Link>
                <Link to="/result"><button type="button">Next</button></Link>
            </div>
        </div>
    );
}

export default Events;