import React, { useState, useContext } from "react";
import { Drawer, Divider, Col, Row, Button } from "antd";
import { store } from "../../GlobalStoreProvider";
import {
  getFullName,
  getEmail,
  getUserID,
  getUserType,
  getUserRole,
  getUserDesc,
} from "../../../logic/user";
import KPITracker from "./KPITracker";
import SearchableTable from "./SearchableTable";
import { logout, isAdmin } from "../../../logic/authentication";

const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">
      {title}: <span style={{ color: "grey" }}>{content}</span>
    </p>
  </div>
);

export default function Nav_ProfileButton() {
  const [visible, setVisible] = useState(false);
  const { state, dispatch } = useContext(store);
  const fullName = getFullName(state);
  const email = getEmail(state);
  const userID = getUserID(state);
  const userType = getUserType(state);
  const admin = isAdmin(state);
  const userRole = getUserRole(state);
  const userDesc = getUserDesc(state);

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
          Performance
        </p>
        <Row>
          <Col span={12}>
            <KPITracker />
          </Col>
        </Row>
        {admin && (
          <>
            <Divider />
            <p className="site-description-item-profile-p">Information</p>
            <Row>
              <Col span={12}>
                <SearchableTable type="organisations" />
              </Col>
              <Col span={12}>
                <SearchableTable type="categories" />
              </Col>
            </Row>
          </>
        )}
        <Divider />
        <p className="site-description-item-profile-p">User Profile</p>
        <Row>
          <Col span={12}>
            <DescriptionItem title="User ID" content={userID} />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Full Name" content={fullName} />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Account Type" content={userType} />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Email" content={email} />
          </Col>
        </Row>

        <Divider />
        <p className="site-description-item-profile-p">Company</p>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Position" content={userRole} />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Responsibilities" content={userDesc} />
          </Col>
        </Row>
        <Divider />
        <p className="site-description-item-profile-p">Actions</p>
        <Row>
          <Col>
            <Button type="dashed" onClick={() => logout(dispatch)}>
              Logout
            </Button>
          </Col>
        </Row>
      </Drawer>
    </>
  );
}
