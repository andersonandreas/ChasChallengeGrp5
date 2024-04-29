import React from 'react';
import { Link } from 'react-router-dom';
import { useAnswers } from '../components/AnswerContext';
import { Toggle } from '../components/button';
import { useLocStorage } from '../components/LocStorage';

function Events() {
    const [selectedOption, handleSel] = useLocStorage('eventSel');
    const [formData, setFormData] = useLocStorage('formData', {
        country: '',
        city: '',
        startDate: '',
        endDate: '',
        party: [],
        budget: [],
        Activities: [],
        Events: []
    });
    const { answers, setAnswers } = useAnswers();

    const handleEventSelect = (choice) => {
        setFormData({
            ...formData,
            event: formData.event ? [...formData.event, choice] : [choice]
        });
        setAnswers({
            ...answers,
            event: answers.event ? [...answers.event, choice] : [choice]
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
                        selected={selectedOption === choice}
                        handleSel={handleSel}
                        handleChoice={handleEventSelect}
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