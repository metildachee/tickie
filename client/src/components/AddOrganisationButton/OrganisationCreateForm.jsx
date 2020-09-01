import React, { useContext, useState } from "react";
import { Modal, Form, Input } from "antd";
import { organisationExists } from "../../logic/organisation";
import { store } from "../GlobalStoreProvider";
import AlertButton from "../AlertButton";

export default function CollectionCreateForm({ visible, onCreate, onCancel }) {
  const { state } = useContext(store);
  const [alertVisible, setAlertVisible] = useState(false);
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Add a new organisation"
      okText="Add"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            if (!organisationExists(values.name, state)) {
              form.resetFields();
              onCreate(values);
            } else {
              setAlertVisible(true);
            }
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: "public",
        }}
      >
        <AlertButton visible={alertVisible} alertMsg="Organisation exists!" />
        <Form.Item
          name="name"
          label="Title"
          rules={[
            {
              required: true,
              message: "Please input the name of organisation!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input type="textarea" />
        </Form.Item>
      </Form>
    </Modal>
  );
}
