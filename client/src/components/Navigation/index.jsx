import React, { useContext } from "react";
import { Breadcrumb } from "antd";
import { logout } from "../../logic/authentication";
import { store } from "../GlobalStoreProvider";
import ViewProfileButton from "./ViewProfileButton";

export default function Navigation() {
  const { dispatch } = useContext(store);

  return (
    <Breadcrumb
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#001529",
        color: "white",
        height: "5vh",
        fontSize: "15px",
      }}
    >
      <Breadcrumb.Item href="/">
        <span style={{ color: "white", paddingLeft: "10px" }}>tickie</span>
      </Breadcrumb.Item>
      <Breadcrumb.Item href="/">
        <ViewProfileButton />
        <span
          style={{ color: "white", paddingRight: "15px" }}
          onClick={() => logout(dispatch)}
        >
          Logout
        </span>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}
