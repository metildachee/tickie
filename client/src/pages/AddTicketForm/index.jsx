import React, { useState, useEffect, useContext } from "react";
import { Popover, Col, Row, Form, Input, Button, Radio, Select } from "antd";
import { getCategories, categories, createTicket } from "../../logic/ticket";
import { store } from "../../components/GlobalStoreProvider";

export default function AddTicketForm() {
  const { dispatch, state } = useContext(store);

  useEffect(() => {
    getCategories(dispatch);
  }, []);

  // Form Init
  const [componentSize, setComponentSize] = useState("default");
  const [titlePopupVisible, setTitlePopupVisible] = useState(false);
  const [descPopupVisibile, setDescPopupVisible] = useState(false);

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  // Categories
  const category = categories(state);
  const onFinish = (values) => {
    createTicket(dispatch, values.ticket);
  };

  const validateMessages = {
    required: "${label} is required!",
  };

  return (
    <Row
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <Col style={{ margin: "0 auto" }}>
        <Form
          layout="horizontal"
          initialValues={{ size: componentSize }}
          onValuesChange={onFormLayoutChange}
          size={componentSize}
          onFinish={onFinish}
          name="nest-messages"
          validateMessages={validateMessages}
          style={{ width: "50vh" }}
        >
          <Form.Item name="size">
            <Radio.Group>
              <Radio.Button value="small">Small</Radio.Button>
              <Radio.Button value="default">Default</Radio.Button>
              <Radio.Button value="large">Large</Radio.Button>
            </Radio.Group>
          </Form.Item>

          <Popover
            content={
              <>
                <p>This should describe the problem in a single line</p>{" "}
                <a onClick={() => setTitlePopupVisible(false)}>Close</a>
              </>
            }
            title="Note"
            trigger="click"
            visible={titlePopupVisible}
            onVisibleChange={() => setTitlePopupVisible(!titlePopupVisible)}
          >
            <Form.Item
              name={["ticket", "name"]}
              label="Title"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Popover>

          <Popover
            content={
              <>
                <p>
                  Please be as specify as possible. This will assist the
                  engineers to speed up troubleshooting and get the problem
                  solved quickly.
                </p>{" "}
                <a onClick={() => setDescPopupVisible(false)}>Close</a>
              </>
            }
            title="Note"
            trigger="click"
            visible={descPopupVisibile}
            onVisibleChange={() => setDescPopupVisible(!descPopupVisibile)}
          >
            <Form.Item
              name={["ticket", "desc"]}
              label="Description"
              rules={[{ required: true }]}
            >
              <Input.TextArea />
            </Form.Item>
          </Popover>
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
            <Input.TextArea />
          </Form.Item>
          <p>
            Please note that once your ticket has been submitted, it will no
            longer be editable.
          </p>
          <p>Please make sure you have included all the details.</p>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}
