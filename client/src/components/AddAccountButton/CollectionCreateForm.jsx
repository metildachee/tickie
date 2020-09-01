import React, { useContext, useState } from "react";
import { Modal, Form, Input, Radio, Select } from "antd";
import { store } from "../GlobalStoreProvider";
import AlertButton from "../AlertButton";
import { checkEmailExists, passwordsSame } from "../../logic/user";
import { organisations } from "../../logic/organisation";
const { Option } = Select;

export default function CollectionCreateForm({ visible, onCreate, onCancel }) {
  const { state } = useContext(store);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMsg, setAlertMsg] = useState("Email exists!");
  const [form] = Form.useForm();
  const orgs = organisations(state);
  return (
    <Modal
      visible={visible}
      title="Add a new user"
      okText="Add"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            console.log(values);
            if (checkEmailExists(values.email, state)) {
              setAlertVisible(true);
            } else if (!passwordsSame(values.password, values.password2)) {
              setAlertMsg("Password different!");
              setAlertVisible(true);
            } else {
              form.resetFields();
              onCreate(values);
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
        <AlertButton visible={alertVisible} alertMsg={alertMsg} />
        <Form.Item
          name="fname"
          label="First name"
          rules={[
            {
              required: true,
              message: "Please input first name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="lname"
          label="Last name"
          rules={[
            {
              required: true,
              message: "Please input last name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: "Please input email!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Confirm password"
          name="password2"
          rules={[
            {
              required: true,
              message: "Please input your confirm password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input type="textarea" />
        </Form.Item>
        <Form.Item
          name="role"
          label="Role"
          rules={[
            {
              required: true,
              message: "Please input role",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="organisation"
          label="Organisation"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select placeholder="Please choose an organisation" allowClear>
            {orgs.map((org) => (
              <Option key={org._id} value={org._id}>
                {org.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="type"
          className="collection-create-form_last-form-item"
        >
          <Radio.Group>
            <Radio value="Client">Client</Radio>
            <Radio value="Agent">Agent</Radio>
            <Radio value="Admin">Admin</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
}
