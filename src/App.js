import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Line} from "component"
import {monthSale} from "data/monthSale"
import {monthQuality} from "data/monthQuality"

function App() {
    
  return (
    <div className="App">
      <div><Line data={monthSale} /></div>
      <div><Line data={monthQuality} /></div>
    </div>
  );
}

export default App;
