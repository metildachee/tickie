import React, { useContext, useEffect, useState } from "react";
import { Modal, Button } from "antd";
import { store } from "../GlobalStoreProvider";
import { getAgents } from "../../logic/user";
import {
  AgentSelector,
  PrioritySelector,
  StatusSelector,
} from "./AdminSelectors";
import {
  assignedAgent,
  assignedPriority,
  updateTicket,
  assignedStatus,
} from "../../logic/ticket";

export default function UpdateTicketButton({ ticket }) {
  const [ModalText, setModelText] = useState("Update ticket");
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
      assignedPriority(state),
      assignedStatus(state)
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
      {ticket.status === "Archived" ? (
        <Button type="dashed">Ticket closed</Button>
      ) : (
        <>
          <Button type="primary" onClick={() => showModal()}>
            {ticket.status === "Open" ? "Assign" : "Update Status"}
          </Button>
          <Modal
            title={ModalText}
            visible={visible}
            onOk={() => handleOk()}
            confirmLoading={confirmLoading}
            onCancel={() => handleCancel()}
          >
            {ticket.status === "Open" && <AgentSelector />}
            <StatusSelector status={ticket.status} />
            <PrioritySelector />
          </Modal>
        </>
      )}
    </>
  );
}
