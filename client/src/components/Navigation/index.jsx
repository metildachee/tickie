import React, { useContext } from "react";
import { Breadcrumb, Typography } from "antd";
import { logout } from "../../logic/authentication";
import { store } from "../GlobalStoreProvider";
import ViewProfileButton from "./ViewProfileButton";

const { Text } = Typography;

export default function Navigation() {
  const { dispatch } = useContext(store);

  return (
    <Breadcrumb
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#101e2b",
        color: "white",
        height: "8vh",
        fontSize: "15px",
      }}
    >
      <Breadcrumb.Item href="/">
        <span
          style={{
            color: "white",
            paddingLeft: "10px",
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontWeight: "700",
          }}
        >
          Tickie
        </span>
      </Breadcrumb.Item>
      <Breadcrumb.Item href="/">
        <ViewProfileButton />
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}
