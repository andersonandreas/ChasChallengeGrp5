import React from 'react';
import { Link } from 'react-router-dom';

const Quest2 = () => {
    return (
        <div>
            <div className='progress'>
                <p>Step 2 of 4</p>
                <div className='line' />
            </div>
            <div className='box'>
                <h2>Who do you plan on traveling with on your next adventure?</h2>
                <div className='btnContainer'>
                    <button>Solo</button>
                    <button>Couple</button>
                    <button>Family</button>
                    <button>Friends</button>
                </div>
            </div>
            <div>
                <div><Link to="/"><button>Back</button></Link></div>
                <div><Link to="/budget"><button type="submit">Submit</button></Link></div>
            </div>
        </div>
    )
}
export default Quest2;