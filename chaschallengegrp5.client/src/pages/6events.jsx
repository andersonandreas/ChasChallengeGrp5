import React from 'react';
import { Link } from 'react-router-dom';

function Events() {
    const handleEventSelect = (event) => {};

    return (
        <div>
            <h1>What kind of events are you interested in?</h1>
            <div>
                <button type="button" onClick={() => handleEventSelect('Teather')}>Teather</button>
                <button type="button" onClick={() => handleEventSelect('Stand-Up')}>Stand-Up</button>
                <button type="button" onClick={() => handleEventSelect('Sport')}>Sport</button>
                <button type="button" onClick={() => handleEventSelect('Everything')}>Everything</button>
            </div>
            <div>
                <Link to="/food"><button type="button">Back</button></Link>
                <Link to="/result"><button type="button">Next</button></Link>
            </div>
        </div>
    );
}

export default Events;