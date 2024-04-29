import React from 'react'
import { Link } from 'react-router-dom';

function Signup() {
    return (
        <div>
            <form>
                <h3>Sign up</h3>
                <label htmlFor="email">Email</label>
                <input id="email" name='email' type='text' />
                <label htmlFor="password">Password</label>
                <input type="text" name='password' id='password' />
                <button type='submit'>Submit</button>
                <Link to="/login">Already have an account?</Link>
            </form>
        </div>
    )
}


export default Signup;