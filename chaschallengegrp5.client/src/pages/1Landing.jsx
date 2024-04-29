import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useLocStorage } from '../components/LocStorage';

function Landing() {

    const [formData, setFormData] = useLocStorage('formData', {
        country: '',
        city: '',
        startDate: '',
        endDate: ''

    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [id]: value
        }));
    };
    return (
        <div>
            <div>
                <h1>Välkommen! Hitta dina favorit aktiviteter Sök nedan</h1>
                <div>
                    <label htmlFor='country'>Country:</label>
                    <input
                        id='country'
                        placeholder='Select A Country'
                        value={formData.country}
                        onChange={handleChange}
                    />
                </div><div>
                    <label htmlFor="city" type="input">City:</label>
                    <input
                        id="city"
                        placeholder="Select A City"
                        value={formData.city}
                        onChange={handleChange}
                    />
                </div><div>
                    <label htmlFor="startDate">From:</label>
                    <input type="date"
                        id='startDate'
                        value={formData.startDate}
                        onChange={handleChange}
                    />
                    <label htmlFor="endDate">To:</label>
                    <input type="date"
                        id='endDate'
                        value={formData.endDate}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div>
                {/* <div><Link><button>Back</button></Link></div> */}
                <div><Link to="/party"><button type="submit">Submit</button></Link></div>
            </div>
        </div>



    )
}

export default Landing;