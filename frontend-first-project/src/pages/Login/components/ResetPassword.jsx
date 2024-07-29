import { Button, Form, Input } from "antd";
import React from "react";
import { StyledResetPasswordWrapper } from "../../../styles/loginStyles";
import { useNavigate } from 'react-router-dom';
import { ROUTES } from "../../../routes/routeConstants";

const ResetPassword = () => {
  const [form] = Form.useForm();
    const navigate = useNavigate()

  const onFinish = (values) => {
    console.log("Success:", values);
    navigate(ROUTES.LOGIN)  // route to login page after resetting the password
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <StyledResetPasswordWrapper>
      <div className="inner-container">
        <h1>Reset Password</h1>

        <Form
          name="basic"
          layout="vertical"
          requiredMark={false}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          
          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              { required: true, message: "Please confirm your password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The two passwords do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Reset
            </Button>
          </Form.Item>
        </Form>
      </div>
    </StyledResetPasswordWrapper>
  );
};

export default ResetPassword;
