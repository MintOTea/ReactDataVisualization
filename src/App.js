import React from 'react';
import './App.css';
import {Line,Bar,Scatter} from "component";
import {monthSale} from "data/monthSale";
import {monthQuality} from "data/monthQuality";
import {monthYield} from "data/monthYield";
import {malfunction} from "data/malfunction";

function App() {
    
  return (
    <div className="App">
      <div><Line data={monthSale} /></div>
      <div><Line data={monthQuality} /></div>
      <div><Bar data={monthYield} /></div>
      <div><Bar data={malfunction} /></div>
    </div>
  );
}

export default App;
