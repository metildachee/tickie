import React from "react";
import Login from "../../components/Login";
import Productivity from "./productivity.jpg";
import GithubIcon from "./GithubIcon";
import { CheckCircleTwoTone } from "@ant-design/icons";
import "./index.css";

import { Typography, Button, Row, Space } from "antd";
const { Text, Title } = Typography;

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
          <div>
            <Row className="grid">
              <div className="center-xy">
                <img src={Productivity} alt="Productivity" />
              </div>
              <div>
                <Space direction="vertical">
                  <Title level={4}>
                    {" "}
                    <CheckCircleTwoTone style={{ paddingRight: "5px" }} />
                    User access control
                  </Title>
                  <Text>
                    Customise who to do what to ensure the system performs{" "}
                    <Text mark>exactly</Text> how it's supposed to.
                  </Text>
                  <Title level={4}>
                    {" "}
                    <CheckCircleTwoTone style={{ paddingRight: "5px" }} />
                    Easy implementation
                  </Title>
                  <Text>
                    Tickie is web based and can be configured for online usage
                    so you can <Text mark>get up and running in seconds</Text>.
                    Should you desire, Tickie is also available as an offline
                    solution.
                  </Text>
                  <Title level={4}>
                    {" "}
                    <CheckCircleTwoTone style={{ paddingRight: "5px" }} />
                    Simple interface
                  </Title>
                  <Text>
                    Long begone clunky and chunky interfaces. Tickie's{" "}
                    <Text mark>smooth and easy interface</Text> allows any user
                    to easily navigate the system. We can betcha no training is
                    required.
                  </Text>
                  <Title level={4}>
                    {" "}
                    <CheckCircleTwoTone style={{ paddingRight: "5px" }} />
                    Data friendly
                  </Title>
                  <Text>
                    Tickie is <Text mark>designed</Text> to handle large amounts
                    of data. Searching and sorting is an integral part of the
                    Tickie Support System experience.
                  </Text>
                </Space>
              </div>
            </Row>
            <Button type="primary" size="large" shape="round" id="get-started">
              <a href="#login">Get started</a>
            </Button>
          </div>
        </section>
        <section id="login" className="section center-xy">
          <Login />
        </section>
      </div>
    </div>
  );
}
