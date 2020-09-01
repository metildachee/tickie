import React, { useState, useContext, useEffect } from "react";
import { Button } from "antd";
import CollectionCreateForm from "./CollectionCreateForm";
import { getAllUsers, addAccount } from "../../logic/user";
import openNotificationWithIcon from "../Notification";
import { store } from "../GlobalStoreProvider";

export default function CollectionsPage() {
  const [visible, setVisible] = useState(false);
  const { dispatch } = useContext(store);

  useEffect(() => {
    getAllUsers(dispatch);
  }, []);

  const onCreate = (values) => {
    setVisible(false);
    addAccount(dispatch, values);
    openNotificationWithIcon(
      "success",
      `New ${values.type} added successfully!`,
      `${values.fname} ${values.lname} has been added.`
    );
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        Add Account
      </Button>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
}
