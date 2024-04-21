import React from 'react';
import { Link } from 'react-router-dom';
function Activities() {
    const handleActivitySelect = (activity) => {
        // Handle activity selection :)
    };
    return (
        <div>
            <h1>What Activities Are You Interested In?</h1>
            <div>
                <button type="button" onClick={() => handleActivitySelect('stränder')}>Stränder</button>
                <button type="button" onClick={() => handleActivitySelect('nattliv')}>Nattliv</button>
                <button type="button" onClick={() => handleActivitySelect('mat')}>Mat</button>
                <button type="button" onClick={() => handleActivitySelect('adrenalin_höjare')}>Adrenalin Höjare</button>
                <button type="button" onClick={() => handleActivitySelect('sevärdigheter')}>Sevärdigheter</button>
                <button type="button" onClick={() => handleActivitySelect('evenemang')}>Evenemang</button>
                <button type="button" onClick={() => handleActivitySelect('nöjesparker')}>Nöjesparker</button>
            </div>
            <div>
                <Link to="/budget"><button type="button">Back</button></Link>
                <Link to="/food"><button type="button">Next</button></Link>
            </div>
        </div>
    );
}
export default Activities;