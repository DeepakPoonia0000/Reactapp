import React, { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar'; 
import Counter from './component/Counter'; 

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar title="React Example App" />
      <h1>This is my First React Program</h1>
      <Counter count={count} setCount={setCount} />
    </div>
  );
}

export default App;
