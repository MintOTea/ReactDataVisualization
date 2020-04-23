import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Line } from "component";
import { monthSale } from "data/monthSale";
import { monthQuality } from "data/monthQuality";
import { restoringYield } from "data/restoringyield";

function App() {
  return (
    <div className="App">
      <div style={{ height: "500px" }}>
        <p>月度销量</p>
        <Line data={monthSale} />
      </div>
      <div style={{ height: "500px"}}>
        <p>月度质量表现</p>
        <Line data={monthQuality} />
      </div>
      <div style={{ height: "500px" }}>
        <p>还原良率</p>
        <Line data={restoringYield} />
      </div>
    </div>
  );
}

export default App;
