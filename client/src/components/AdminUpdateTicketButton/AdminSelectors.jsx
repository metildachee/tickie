import React, { useContext } from "react";
import { Form, Select } from "antd";
import { store } from "../GlobalStoreProvider";
import { agents } from "../../logic/user";
import { isAdmin, isAgent } from "../../logic/authentication";
import { assignAgent, assignPriority, assignStatus } from "../../logic/ticket";

export function PrioritySelector() {
  const { dispatch } = useContext(store);
  return (
    <Form.Item label="Priority">
      <Select onChange={(e) => assignPriority(dispatch, e)}>
        <Select.Option key={1} value="Low">
          Low
        </Select.Option>
        <Select.Option key={2} value="Moderate">
          Moderate
        </Select.Option>
        <Select.Option key={3} value="High">
          High
        </Select.Option>
      </Select>
    </Form.Item>
  );
}

export function StatusSelector() {
  const { dispatch, state } = useContext(store);
  const admin = isAdmin(state);
  const agent = isAgent(state);

  return (
    <Form.Item label="Status">
      <Select onChange={(e) => assignStatus(dispatch, e)}>
        {admin && (
          <>
            <Select.Option key={1} value="Open">
              Open
            </Select.Option>
            <Select.Option key={2} value="Assigned">
              Assigned
            </Select.Option>
          </>
        )}
        {agent && (
          <>
            <Select.Option key={3} value="In-progress">
              In-progress
            </Select.Option>
            <Select.Option key={4} value="Resolved">
              Resolved
            </Select.Option>
            <Select.Option key={5} value="Archived">
              Archived
            </Select.Option>
          </>
        )}
      </Select>
    </Form.Item>
  );
}

export function AgentSelector() {
  const { state, dispatch } = useContext(store);
  const agentsArr = agents(state);

  return (
    <Form.Item label="Assign to">
      <Select onChange={(e) => assignAgent(dispatch, e)}>
        {agentsArr.map((agent) => (
          <Select.Option key={agent._id} value={agent._id}>
            {agent.fname} {agent.lname}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
}
