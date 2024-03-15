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
                        <a href='https://www.facebook.com/'  target='_blank' className='socials'>fb</a>
                        <a href="https://github.com/DeepakPoonia0000/" target='_blank'  className='socials'>gh</a>
                        <a href="https://github.com/DeepakPoonia0000/"  target='_blank' className='socials'>g+</a>
                        <a href="https://twitter.com/?lang=en-in"  target='_blank' className='socials'>t</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
