import React from 'react'
import man from "../component/assets/man.jpg"
import './Hero.css';

export const Hero = () => {
    return (
        <div className='hero-container'>
            <div className='hero-one'>
                <div className='hero-left'>
                    <h2 className='username0'>Hello,I'm</h2>
                    <h2 className='username'>Deepak Poonia</h2>
                    <p className='username1'>UI/UX Designer</p>
                    <div className="hero-button">
                        <button>Hire Me</button>
                        <button>Download CV</button>
                    </div>
                    <div className="hero-socialmedia">
                        <a href='https://www.facebook.com/' className="hero-icons" target='_blank'><i className='hero-socialitem'>FB</i></a>
                        <a href='https://github.com/DeepakPoonia0000/' target='_blank' className="hero-icons"><i className='hero-socialitem'>g+</i></a>
                        <a href='https://github.com/DeepakPoonia0000/' className="hero-icons" target='_blank'><i className='hero-socialitem'>gh</i></a>
                        <a href='https://twitter.com/?lang=en-in' className="hero-icons" target='_blank'><i className='hero-socialitem'>t</i></a>
                    </div>
                </div>
                
                <div className='hero-right'>
                    <img src={man} alt="Error" />
                </div>
            </div>
            <div className="herobottom-container">
                
                <div className="herobottomcontainer">
                    <div className="hero-bottom" id='blogs'>
                        <div>
                            <h2>124</h2>
                            <p>Happy Clients</p>
                        </div>
                        <div>
                            <h2>456</h2>
                            <p>Project Completed</p>
                        </div>
                        <div>
                            <h2 className='text-blue'>789</h2>
                            <p >Awards Won</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
