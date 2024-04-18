import React, { useState } from "react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const isSignedIn = false;

    return (
        <div>
            <div className="hamburger">
                <button onClick={toggleMenu}>
                    {isOpen ? 'Close' : 'Menu'}
                </button>
                {isOpen && (
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                )}
            </div>
            <img src="" alt="logo" />
            <div>
                {!isSignedIn ? (
                    <button onClick={() => console.log('Sign In')}>Sign In</button>
                ) : (
                    <div>
                        <img src="profile-pic.jpg" alt="Profile" />
                        <p>Profile</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header;