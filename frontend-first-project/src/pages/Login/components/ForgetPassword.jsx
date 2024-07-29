import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import { StyledForgetPasswordWrapper } from "../../../styles/loginStyles";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes/routeConstants";

const ForgetPassword = () => {
  const [form] = Form.useForm();

  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);
    navigate(ROUTES.LOGIN);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <StyledForgetPasswordWrapper>
      <div className="inner-container">
        <h1>Forget Password</h1>

        <Form
          form={form}
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
            name="email"
            label="Email"
            rules={[
              {
                type: "email",
              },
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input placeholder="Enter Your Email..." />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>

            <Button type="primary" onClick={() => navigate("/login")}>
              Back
            </Button>
          </Form.Item>
        </Form>
      </div>
    </StyledForgetPasswordWrapper>
  );
};

export default ForgetPassword;
