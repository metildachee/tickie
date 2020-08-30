import React, { useContext, useEffect, useState } from "react";
import { Modal, Button } from "antd";
import { store } from "../GlobalStoreProvider";
import { getAgents } from "../../logic/user";
import { AgentSelector, PrioritySelector } from "./AdminSelectors";
import {
  assignedAgent,
  assignedPriority,
  updateTicket,
} from "../../logic/ticket";

export default function UpdateTicketButton({ ticket }) {
  const [ModalText, setModelText] = useState("Content of the modal");
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const showModal = () => setVisible(true);

  const { dispatch, state } = useContext(store);
  useEffect(() => {
    getAgents(dispatch);
  }, []);

  const handleOk = () => {
    setModelText("Updating information");
    setConfirmLoading(true);
    updateTicket(
      dispatch,
      ticket,
      assignedAgent(state),
      assignedPriority(state)
    );
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={() => showModal()}>
        Assign
      </Button>
      <Modal
        title="Update ticket"
        visible={visible}
        onOk={() => handleOk()}
        confirmLoading={confirmLoading}
        onCancel={() => handleCancel()}
      >
        <AgentSelector />
        <PrioritySelector />
      </Modal>
    </>
  );
}
