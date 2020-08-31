import React, { useState, useContext } from "react";
import { Drawer, Divider, Col, Row } from "antd";
import { store } from "../../GlobalStoreProvider";
import {
  getFullName,
  getEmail,
  getUserID,
  getUserType,
} from "../../../logic/user";
import KPITracker from "./KPITracker";
import { isClient } from "../../../logic/authentication";

const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">
      {title}: <span style={{ color: "grey" }}>{content}</span>
    </p>
  </div>
);

export default function Nav_ProfileButton() {
  const [visible, setVisible] = useState(false);
  const { state } = useContext(store);
  const fullName = getFullName(state);
  const email = getEmail(state);
  const userID = getUserID(state);
  const userType = getUserType(state);
  const client = isClient(state);

  const showDrawer = (e) => {
    e.preventDefault();
    setVisible(true);
  };

  const onClose = (e) => {
    e.preventDefault();
    setVisible(false);
  };

  return (
    <>
      <span
        style={{ color: "white", paddingRight: "15px" }}
        onClick={(e) => showDrawer(e)}
      >
        {fullName}
      </span>
      <Drawer
        width={640}
        placement="right"
        closable={false}
        onClose={(e) => onClose(e)}
        visible={visible}
      >
        <p
          className="site-description-item-profile-p"
          style={{ marginBottom: 24 }}
        >
          User Profile
        </p>
        <p className="site-description-item-profile-p">Personal</p>
        <Row>
          <Col span={12}>
            <DescriptionItem title="User ID" content={userID} />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Full Name" content={fullName} />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Type" content={userType} />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem title="City" content="Singapore" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Country" content="Singapore" />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            {!client && (
              <DescriptionItem title="Performance" content={<KPITracker />} />
            )}
          </Col>
        </Row>

        <Divider />
        <p className="site-description-item-profile-p">Company</p>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Position" content="IT Support" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Responsibilities" content="IT Support" />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Department" content="XTech" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Supervisor" content="Your boss" />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <DescriptionItem
              title="Skills"
              content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
            />
          </Col>
        </Row>
        <Divider />
        <p className="site-description-item-profile-p">Contacts</p>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Email" content={email} />
          </Col>
        </Row>
      </Drawer>
    </>
  );
}
