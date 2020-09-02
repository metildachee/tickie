import React, { useState, useContext, useEffect } from "react";
import { Button } from "antd";
import CollectionCreateForm from "./CollectionCreateForm";
import { getCategories, addCategory } from "../../logic/category";
import openNotificationWithIcon from "../Notification";
import { store } from "../GlobalStoreProvider";

export default function CollectionsPage() {
  const [visible, setVisible] = useState(false);
  const { dispatch } = useContext(store);

  useEffect(() => {
    getCategories(dispatch);
  }, []);

  const onCreate = (values) => {
    setVisible(false);
    addCategory(dispatch, values);
    openNotificationWithIcon(
      "success",
      `${values.name} added successfully!`,
      `A new category has been added.`
    );
  };

  return (
    <div style={{ marginRight: "20px " }}>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        Add Category
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
