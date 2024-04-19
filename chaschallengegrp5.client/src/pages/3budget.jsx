import React from 'react';
import { Link } from 'react-router-dom';

const Budget = () => {
    return (
        <div>
            <div className='progress'>
                <p>Step 2 of 4</p>
                <div className='line' />
            </div>
            <div className='box'>
                <h2>Whats your budget?</h2>
                <div className='btnContainer'>
                    <button>Low</button>
                    <button>Medium</button>
                    <button>High</button>
                    <button>None of your buisness</button>
                </div>
            </div>
            <div>
                <div><Link to="/companion"><button>Back</button></Link></div>
                <div><Link to="/budget"><button type="submit">Submit</button></Link></div>
            </div>
        </div>
    )
}

export default Budget;