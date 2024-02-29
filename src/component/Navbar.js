// import React from 'react'
// import "./Navbarr.css"

// export const Navbar = () => {
//   return (
//     <div className='clr'>Navbar</div>
//   )
// }



// Navbar.js

import React from 'react';

function Navbar({ title="HOw Are You" }) {
  return (
    <nav>
      <h2>{title}</h2>
    </nav>
  );
}

export default Navbar;
