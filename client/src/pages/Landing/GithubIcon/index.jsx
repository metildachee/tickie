import React from "react";
import { GithubOutlined } from "@ant-design/icons";

export default function index() {
  return (
    <a
      href
      style={styles}
      href="https://github.com/metildachee/tickie.git"
      target="_blank"
    >
      <GithubOutlined />
    </a>
  );
}

const styles = {
  position: "absolute",
  fontSize: "30px",
  top: "10px",
  right: "30px",
  zIndex: "1",
};
