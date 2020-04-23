import React from "react";
import "./App.css";
import { Row, Col, Button } from "antd";
import { Line, Bar } from "component";
import { monthSale } from "data/monthSale";
import { monthQuality } from "data/monthQuality";
import { restoringYield } from "data/restoringyield";
import { monthYield } from "data/monthYield";
import { malfunction } from "data/malfunction";
import { OCAPAbnormal } from "data/OCAPAbnormal";
import { AbnormalProblem } from "data/AbnormalProblem";

function App() {
  return (
    <div className="app">
      <Row>
        <Col span={6} style={{padding:20}}>
          <div style={{ height: "48vh" }}>
            <Bar data={monthYield} />
          </div>
          <div style={{ height: "48vh" }}>
            <Line data={monthSale} />
          </div>
        </Col>
        <Col span={12}>
          <Row>
            <Col span={24}>
              <div style={{ height: "48vh" }}>
                <Line data={monthQuality} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <div style={{ height: "48vh" }}>
                <Line data={restoringYield} />
              </div>
            </Col>
            <Col span={12}>
              <div style={{ height: "48vh" }}>
                <Bar data={malfunction} />
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={6}>
          <div style={{ height: "48vh" }}>
            <Bar data={OCAPAbnormal} />
          </div>
          <div style={{ height: "48vh" }}>
            <Bar data={AbnormalProblem} />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
