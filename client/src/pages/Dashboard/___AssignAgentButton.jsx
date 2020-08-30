import React, { useContext, useEffect } from "react";
import { store } from "../../components/GlobalStoreProvider";
import { getAgents, agents } from "../../logic/user";
import { Popconfirm, Form, Select } from "antd";

export default function AssignAgentButton() {
  const { dispatch, state } = useContext(store);
  useEffect(() => {
    getAgents(dispatch);
  }, []);

  function AgentSelector() {
    const agentsArr = agents(state);

    console.log(agentsArr);
    return (
      <Form.Item>
        <Select>
          {/* {agentsArr.map((agent) => {
              console.log(agent)
            return (<Select.Option key={agent._id} value={agent._id}>
                happy
            </Select.Option>)
          })} */}
          <Select.Option>happiness</Select.Option>
        </Select>
      </Form.Item>
    );
  }

  return (
    <Popconfirm
      title={() => AgentSelector()}
      okText="Assign"
      cancelText="Cancel"
    >
      <a href="#">Delete</a>
    </Popconfirm>
  );
}
