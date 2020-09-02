import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

export default function Client_AddTicketButton() {
  return (
    <Button type="primary">
      <Link to="/tickie/create">Add ticket</Link>
    </Button>
  );
}
