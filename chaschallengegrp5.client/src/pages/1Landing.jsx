import React from 'react'


function Landing() {
    return (
        <div>
            <div>
                <h1>Välkommen! Hitta dina favorit aktiviteter Sök nedan</h1>
                <label htmlFor="input" type="input">What City Are You Going To?*</label>
                <input placeholder="Select A City"></input>
                <label htmlFor="date">Date:</label>
                <input type="date" name="date" />
            </div>
            <div><button type="submit">Submit</button></div>
        </div>



    )
}

export default Landing;