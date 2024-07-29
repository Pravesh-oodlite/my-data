import { Button, Checkbox, Form, Input, Radio } from "antd";
import React, { useCallback } from "react";
import { StyledRegistrationWrapper } from "../../../styles/loginStyles";
import { useNavigate } from "react-router-dom";
import { useCreateUserMutation } from "../../../services/authApi";
import { toast } from "react-toastify";
import Spinner from "../../../components/Spinner";

const Registration = ({ setRegister }) => {
  const [form] = Form.useForm();

  const navigate = useNavigate();

  const [createUserMutation, { isLoading, error }] = useCreateUserMutation(); // returns array

  const registration = useCallback(
    async (payload) => {
      try {
        console.log("payload", payload);
        const response = await createUserMutation({
          firstName: payload?.firstName,
          lastName: payload?.lastName,
          email: payload?.email,
          password: payload?.password,
        }).unwrap();

        if (response) {
          setRegister(false);
        }
      } catch (error) {
        console.log("Error on time of Registration: ", error);
        toast(error?.data.message);
      }
    },
    [createUserMutation, navigate]
  );

  const onFinish = (values) => {
    console.log("Registration AntD -> Success:", values);

    registration({
      firstName: values?.firstName,
      lastName: values?.lastName,
      email: values?.email,
      password: values?.password,
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Registration AntD -> Failed:", errorInfo);
  };

  return (
    <>
      {isLoading && <Spinner />}

      <StyledRegistrationWrapper>
        <h1>Signup</h1>

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
          {/* <Form.Item
          name="role"
          label="Role"
          rules={[{ required: true, message: "Please select a role!" }]}
        >
          <Radio.Group>
            <Radio value="Admin">Admin</Radio>
            <Radio value="User">User</Radio>
          </Radio.Group>
        </Form.Item> */}

          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              {
                required: true,
                message: "Please input your first name!",
              },
            ]}
          >
            <Input placeholder="Enter Your First Name..." />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[
              {
                required: true,
                message: "Please input your last name!",
              },
            ]}
          >
            <Input placeholder="Enter Your Last Name..." />
          </Form.Item>

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

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Enter your Password..."/>
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
            <Input.Password placeholder="Enter your Password again..."/>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </StyledRegistrationWrapper>
    </>
  );
};

export default Registration;
