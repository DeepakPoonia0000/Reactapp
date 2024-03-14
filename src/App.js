import React from 'react';
import  Navbar from './component/Navbar';
import { Hero } from './component/Hero';
import { Blog } from './component/Blog';
import { Contact } from './component/Contact';
import { Fotter } from './component/Fotter';


function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Blog/>
      <Contact/>
      <Fotter/>
    </div>
  );
}

export default App;