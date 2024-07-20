import React from 'react';
import Quote from './Quote';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Daily Quotes</h1>
        <Quote />
      </header>
    </div>
  );
};

export default App;
