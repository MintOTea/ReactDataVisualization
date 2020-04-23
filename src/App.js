import React from 'react';
import logo from './logo.svg';
import './App.css';
import Bar from "./component/bar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Bar/>
      </header>
    </div>
  );
}

export default App;
