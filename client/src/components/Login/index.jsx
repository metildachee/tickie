import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Form, Input, Button, Checkbox, Typography, Alert } from "antd";
import { store } from "../../components/GlobalStoreProvider";
import { login, checkToken } from "../../logic/authentication";
const { Text } = Typography;

export default function Login() {
  const { dispatch } = useContext(store);
  const [visible, setVisible] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");

  useEffect(() => {
    checkToken(dispatch);
  }, []);

  const onFinish = async (values) => {
    try {
      let results = await axios.post(
        `${process.env.REACT_APP_DEV_SERVER_URL}/auth/login`,
        values
      );
      login(dispatch, results.data.token);
    } catch (error) {
      setVisible(true);
      setAlertMsg(error.response.data.msg);
      console.error(error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <Text style={{ fontSize: "40px", color: "#11202e" }}>
          Welcome back!
        </Text>

        <Form
          style={{ width: "50vw" }}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          {visible && (
            <Alert
              style={{ marginBottom: "5px" }}
              message={alertMsg}
              type="warning"
              showIcon
              closable
              afterClose={() => setVisible(false)}
            />
          )}
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
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

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item style={{ marginTop: "0px" }}>
            <Button
              type="primary"
              shape="round"
              size="large"
              htmlType="submit"
              ghost
            >
              Login Tickie
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
