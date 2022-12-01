import React from 'react';
import Header from './components/Header.js';
import FishTank from './components/FishTank.js';
import Form from './components/Form.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <FishTank />
      <Form />
    </div>
  );
}

export default App;
