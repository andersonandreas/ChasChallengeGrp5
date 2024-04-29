import React from 'react';
import { Link } from 'react-router-dom';
import { useAnswers } from '../components/AnswerContext';
import { Toggle } from '../components/button';
import { useLocStorage } from '../components/LocStorage.jsx';

function Party() {
    const { answers, setAnswers } = useAnswers();

    const handlePartySelect = (choice) => {
        const updatedParty = answers.party.includes(choice) ?
            answers.party.filter(item => item !== choice) :
            [...answers.party, choice];
        setAnswers({
            ...answers,
            party: updatedParty
        });
        handleSel(choice);
    };

    return (
        <div>
            <div className='progress'>
                <p>Step 2 of 4</p>
                <div className='line' />
            </div>
            <div className='box'>
                <h2>Who do you plan on traveling with on your next adventure?</h2>
                <div className='btnContainer'>
                    {['Solo', 'Couple', 'Family', 'Friends'].map(choice => (
                        <Toggle
                            key={choice}
                            value={choice}
                            handleChoice={() => handlePartySelect(choice)}
                        />
                    ))}
                </div>
            </div>
            <div>
                <div><Link to="/"><button>Back</button></Link></div>
                <div><Link to="/budget"><button type="submit">Submit</button></Link></div>
            </div>
        </div>
    )
}
export default Party;