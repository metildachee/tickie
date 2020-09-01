import React from "react";
import Login from "../../components/Login";
import KPI from "./kpi.jpg";
import Productivity from "./productivity.jpg";
import GithubIcon from "./GithubIcon";
import "./index.css";

import { Typography, Button, Row, Col } from "antd";
const { Text } = Typography;

export default function Landing() {
  return (
    <div className="smooth-scroll-parent">
      <div className="container">
        <GithubIcon />
        <section
          className="section center-xy"
          style={{ backgroundColor: "aliceblue" }}
        >
          <div>
            <div>
              <h1 className="tickie-title">Tickie</h1>
              <Text type="secondary">Ticket support systems suck, </Text>
              <Text mark>it doesn't have to.</Text>
            </div>
            <div style={{ marginTop: "10px" }}>
              <Button
                size="large"
                shape="round"
                type="primary"
                style={{ marginRight: "15px" }}
              >
                <a href="#learn-more">Learn more</a>
              </Button>
              <Button type="primary" size="large" shape="round" ghost>
                <a href="#login">Login Tickie</a>
              </Button>
            </div>
          </div>
        </section>
        <section id="learn-more" className="section center-xy">
          <Row>
            <Col className="center-xy" span={12}>
              <div>
                <Row>
                  <img src={Productivity} alt="Productivity" />
                </Row>
                <Row>
                  <Text style={{ fontSize: "20px" }}>
                    Add comments, view threads to see <Text mark>exactly</Text>{" "}
                    what is happening.
                  </Text>
                </Row>
              </div>
            </Col>
            <Col className="center-xy" span={12}>
              <div>
                <Text style={{ fontSize: "20px" }}>
                  Manage KPI and performance <Text mark>at ease</Text>
                </Text>
                <img src={KPI} alt="KPI" />
              </div>
            </Col>
          </Row>
        </section>
        <section id="login" className="section center-xy">
          <Login />
        </section>
      </div>
    </div>
  );
}
