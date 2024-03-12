import React from 'react';
import { Navbar } from './component/Navbar';
import { Hero } from './component/Hero'
import { Carousel } from './component/Carousel';
import { Blog } from './component/Blog';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle';


function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      {/* <Carousel /> */}
      <Blog/>
    </div>
  );
}

export default App;
