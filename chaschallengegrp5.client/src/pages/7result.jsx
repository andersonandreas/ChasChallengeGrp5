import React from 'react';
import { Link } from 'react-router-dom';

function Result() {


    return (
        <div>
            <div>
                <button>Edit</button>
            </div>

            <div>
                <div>
                    <h1>You plan to travel with...</h1>
                    {party.map(x => {
                        return (
                            <button>{x}</button>
                        )
                    })}
                </div>
                <div>
                    <h1>Your budget is...</h1>
                    {budget.map(x => {
                        return (
                            <button>{x}</button>
                        )
                    })}
                </div>
                <div>
                    <h1>You want to explore...</h1>
                    {activities.map(x => {
                        return (
                            <button>{x}</button>
                        )
                    })}
                </div>
                <div>
                    <h1>You want to eat...</h1>
                    {food.map(x => {
                        return (
                            <button>{x}</button>
                        )
                    })}
                </div>
                <div>
                    <h1>The events you want to see are...</h1>
                    {events.map(x => {
                        return (
                            <button>{x}</button>
                        )
                    })}
                </div>
            </div>

            <div>
                <Link to="/events"><button type="button">Back</button></Link>
                <Link to=""><button type="button">CTA</button></Link>
            </div>
        </div>
    );
}

export default Result;