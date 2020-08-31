import React, { useEffect, useState } from "react";
import { Modal, Button } from "antd";
// import { store } from "../GlobalStoreProvider";
// import { getAgents } from "../../logic/user";

export default function UpdateTicketButton({ ticket }) {
  const [ModalText, setModelText] = useState("Add category");
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const showModal = () => setVisible(true);

  //   const { dispatch, state } = useContext(store);
  useEffect(() => {
    // getAgents(dispatch);
    //getCategory(dispatch)
  }, []);

  const handleOk = () => {
    setModelText("Updating information");
    setConfirmLoading(true);
    // updateTicket(
    //   dispatch,
    //   ticket,
    //   assignedAgent(state),
    //   assignedPriority(state),
    //   assignedStatus(state)
    // );
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
        Add Category
      </Button>
      <Modal
        title={ModalText}
        visible={visible}
        onOk={() => handleOk()}
        confirmLoading={confirmLoading}
        onCancel={() => handleCancel()}
      ></Modal>
    </>
  );
}
