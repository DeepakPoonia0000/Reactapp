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
                        <a href=""><li className='clr-orange'>Home</li></a>
                        <a href="#about">
                            <li>About</li>
                        </a>
                        <a href="#services">
                            <li>Services</li>
                        </a>
                        <a href="#portfolio">
                            <li>Portfolio</li>
                        </a>
                        <a href="#testmonial">
                            <li>Testmonial</li>
                        </a>
                        <a href="#blog">
                            <li>Blog</li>
                        </a>
                        <a href="#contact">
                            <li>contact</li>
                    </a>
                        </ul>
            </div>
        </div>
    );
};

export default Navbar;