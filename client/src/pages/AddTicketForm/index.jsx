import React, { useState, useEffect, useContext } from "react";
import { Form, Input, Button, Radio, Select } from "antd";
import { getCategories, categories, createTicket } from "../../logic/ticket";
import { store } from "../../components/GlobalStoreProvider";

export default function AddTicketForm() {
  const { dispatch, state } = useContext(store);
  useEffect(() => {
    getCategories(dispatch);
  }, []);

  // Form Init
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  // Categories
  const category = categories(state);
  const onFinish = (values) => {
    // need to have some form of validation
    createTicket(dispatch, values.ticket);
  };

  const validateMessages = {
    required: "${label} is required!",
  };

  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        onFinish={onFinish}
        name="nest-messages"
        validateMessages={validateMessages}
      >
        <Form.Item name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name={["ticket", "name"]}
          label="Title"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["ticket", "desc"]}
          label="Description"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["ticket", "category"]}
          label="Category"
          rules={[{ required: true }]}
        >
          <Select>
            {category.map((cat) => (
              <Select.Option key={cat._id} value={cat._id}>
                {cat.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item name={["ticket", "remarks"]} label="Remarks">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
