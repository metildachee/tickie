import React from "react";
import { GithubOutlined } from "@ant-design/icons";
import "./index.css";

export default function index() {
  return (
    <a
      href
      style={styles}
      href="https://github.com/metildachee/tickie.git"
      target="_blank"
      className="shake-animation"
    >
      <GithubOutlined />
    </a>
  );
}

const styles = {
  position: "absolute",
  fontSize: "30px",
  top: "30px",
  right: "30px",
  zIndex: "1",
};
