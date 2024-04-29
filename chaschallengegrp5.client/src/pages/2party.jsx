import React from 'react';
import { Link } from 'react-router-dom';
import { useAnswers } from '../components/AnswerContext';
import { Toggle } from '../components/button.jsx';
import { useLocStorage } from '../components/LocStorage.jsx';


const Party = () => {
    const [selectedOption, handleSel] = useLocStorage('partySel');
    const [formData, setFormData] = useLocStorage('formData', {
        country: '',
        city: '',
        startDate: '',
        endDate: '',
        party: []
    });

    const { answers, setAnswers } = useAnswers();

    const handlePartySelect = (choice) => {
        setFormData({
            ...formData,
            party: formData.party ? [...formData.party, choice] : [choice]
        });
        setAnswers({
            ...answers,
            party: answers.party ? [...answers.party, choice] : [choice]
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
                            selected={selectedOption === choice}
                            handleSel={handleSel}
                            handleChoice={handlePartySelect}
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