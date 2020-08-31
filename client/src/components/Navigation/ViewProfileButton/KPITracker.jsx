import React, { useContext } from "react";
import { Statistic, Col, Row } from "antd";
import { LikeOutlined } from "@ant-design/icons";
import {
  getClosedTickets,
  getOpenTickets,
  getAssignedTickets,
} from "../../../logic/ticket";
import { store } from "../../GlobalStoreProvider";
import { isAdmin } from "../../../logic/authentication";

export default function KPITracker() {
  const { state } = useContext(store);
  const noOfClosedTickets = getClosedTickets(state).length;
  const noOfOpenTickets = getOpenTickets(state).length;
  const noOfAssignedTickets = getAssignedTickets(state).length;
  const admin = isAdmin(state);

  return (
    <div>
      <Row>
        <Col span={12}>
          <Statistic
            title="Closed Tickets"
            value={noOfClosedTickets}
            prefix={<LikeOutlined />}
            suffix="/ 100"
          />
        </Col>
        {admin && (
          <Col span={12}>
            <Statistic title="Open Tickets" value={noOfOpenTickets} />
          </Col>
        )}
        {!admin && (
          <Col span={12}>
            <Statistic title="Assigned" value={noOfAssignedTickets} />
          </Col>
        )}
      </Row>
    </div>
  );
}
