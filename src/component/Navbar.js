// import React from 'react';

// function Navbar() {
//   return (
//     <nav>
//       <h2>j</h2>
//     </nav>
//   );
// }

// export default Navbar;



import React from 'react';
import Navbarr from './Navbarr.css';
import Logoo from "../component/assets/Logoo.jpg"
import Hamburger from "../component/assets/Hamburger.jpg"


export const Navbar = () => {
  return (
    
    <div className='nav-container ' id='Home'>
      <div className='nav-logo'>
        <img src={Logoo} alt='Error'></img>
      </div>
      <div className='nav-pagelinks'>
        <ul className='nav-linkslist'>
      <li><a href='#Home' className=' text-info '>Home</a></li>
      <li><a href='#About'>About</a></li>
      <li><a href='#Services'>Service</a></li>
      <li><a href='#Portfolio'>Portfolio</a></li>
      <li><a href='#Testmonial'>Testmonial</a></li>
      <li><a href='#Blog'>Blog</a></li>
      <li><a href='#Contact'>Contact</a></li>
      </ul>
      <div className='icon'>
      <img src={Hamburger}  ></img>
      </div>
      </div>
      
    </div>
    
  )
}


