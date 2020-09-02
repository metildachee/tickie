import React, { useContext } from "react";
import { Statistic, Col, Row } from "antd";
import { LikeOutlined } from "@ant-design/icons";
import {
  getClosedTickets,
  getOpenTickets,
  getAssignedTickets,
  getWIPTickets,
} from "../../../logic/ticket";
import { store } from "../../GlobalStoreProvider";
import { isAgent } from "../../../logic/authentication";

export default function KPITracker() {
  const { state } = useContext(store);
  const noOfClosedTickets = getClosedTickets(state).length;
  const noOfOpenTickets = getOpenTickets(state).length;
  const noOfAssignedTickets = getAssignedTickets(state).length;
  const noOfInprogressTickets = getWIPTickets(state).length;
  const agent = isAgent(state);

  return (
    <div>
      <Row>
        {!agent && (
          <Col span={6}>
            <Statistic title="Open Tickets" value={noOfOpenTickets} />
          </Col>
        )}
        <Col span={6}>
          <Statistic title="Assigned" value={noOfAssignedTickets} />
        </Col>
        <Col span={6}>
          <Statistic title="In-Progress" value={noOfInprogressTickets} />
        </Col>
        <Col span={6}>
          <Statistic
            title="Closed Tickets"
            value={noOfClosedTickets}
            prefix={<LikeOutlined />}
            suffix="/ 100"
          />
        </Col>
      </Row>
    </div>
  );
}
