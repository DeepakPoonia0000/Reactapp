import React, { useState } from 'react';
import hamburger from './assets/Hamburger.jpg';
import Logo from './assets/Logoo.jpg';
import './Navbar.css';


const Navbar = () => {
    const [show, setShow] = useState(false);

    const handleChange = () => {
        setShow(!show);
    };

    return (
        <div>
            <div className={`${ show ? "nav-dropdown" : "nav-nodropdown"}`}>
                <div className="navbar-top">
                    <img src={Logo} alt="" className='imag' />
                    <img
                        src={hamburger}
                        alt=""
                        className="h-icon"
                        onClick={handleChange}
                    />
                    

                </div>
                <ul className={` nav-items`}>
                        <li className='clr-orange'>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Portfolio</li>
                        <li>Testmonial</li>
                        <li>Blog</li>
                        <li>contact</li>
                    </ul>
            </div>
        </div>
    );
};

export default Navbar;