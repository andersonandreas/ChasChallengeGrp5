import React from 'react';
import { Link } from 'react-router-dom';
import { useAnswers } from '../components/AnswerContext';
import { useLocStorage } from '../components/LocStorage';

function Result() {
    const { answers } = useAnswers();
    const [formData, setFormData] = useLocStorage('formData');

    const clear = () => {
        localStorage.removeItem('formData');
    };

    const categories = [
        { title: 'You plan to travel with...', key: 'party' },
        { title: 'Your budget is...', key: 'budget' },
        { title: 'You want to explore...', key: 'activities' },
        { title: 'You want to eat...', key: 'food' },
        { title: 'The events you want to see are...', key: 'events' }
    ];

    return (
        <div>
            <div>Edit</div>

            {categories.map(category => (
                <div>
                    <h1>{category.title}</h1>
                    {answers[category.key].map(item => <button key={item}>{item}</button>)}
                </div>
            ))}

            <div>
                <div><Link to="/"><button onClick={clear}>Exit</button></Link></div>
                <Link to=""><button onClick={clear} type="button">CTA</button></Link>
            </div>
        </div>
    );
}

export default Result;