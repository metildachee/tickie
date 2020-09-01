import React from "react";
import { Alert } from "antd";

export default function AlertButton({ visible, alertMsg }) {
  return (
    <>
      {visible && (
        <Alert
          style={{ marginBottom: "5px" }}
          message={alertMsg}
          type="warning"
          showIcon
          closable
        />
      )}
    </>
  );
}
