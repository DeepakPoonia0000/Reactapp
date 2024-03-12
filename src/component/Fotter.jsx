import React from 'react';
import './Fotter.css';

export const Fotter = () => {
    return (
        <div>
            <div className="footer">
                <div className="footer-lefttop">
                    <div className="footer-left">
                        <p>Copyright 2024 (c) &nbsp;</p>
                        <p> DevCRUD </p>
                    </div>
                </div>
                <div className="footer-righttop">
                    <div className="footer-right">
                        <a href="#blogs" className='socials'>fb</a>
                        <a href="#blogs" className='socials'>gh</a>
                        <a href="#blogs" className='socials'>g+</a>
                        <a href="#blogs" className='socials'>t</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
