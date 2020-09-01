import React, { useState, useContext, useEffect } from "react";
import { Button } from "antd";
import CollectionCreateForm from "./OrganisationCreateForm";
import { getOrganisations, addOrganisation } from "../../logic/organisation";
import openNotificationWithIcon from "../Notification";
import { store } from "../GlobalStoreProvider";

export default function CollectionsPage() {
  const [visible, setVisible] = useState(false);
  const { dispatch } = useContext(store);

  useEffect(() => {
    getOrganisations(dispatch);
  }, []);

  const onCreate = (values) => {
    setVisible(false);
    addOrganisation(dispatch, values);
    openNotificationWithIcon(
      "success",
      `${values.name} added successfully!`,
      `A new organisation has been added.`
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
        Add Organisation
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
