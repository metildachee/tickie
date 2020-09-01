import React, { useContext, useState } from "react";
import { Modal, Form, Input } from "antd";
import { categoryExists } from "../../logic/category";
import { store } from "../GlobalStoreProvider";
import AlertButton from "../AlertButton";

export default function CollectionCreateForm({ visible, onCreate, onCancel }) {
  const { state } = useContext(store);
  const [alertVisible, setAlertVisible] = useState(false);
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Add a new category"
      okText="Add"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            if (!categoryExists(values.name, state)) {
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
        <AlertButton visible={alertVisible} alertMsg="Category exists!" />
        <Form.Item
          name="name"
          label="Title"
          rules={[
            {
              required: true,
              message: "Please input the title of category!",
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
