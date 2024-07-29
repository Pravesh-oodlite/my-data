import { Button, Checkbox, Form, Input } from "antd";
import React, { useCallback, useEffect } from "react";
import { StyledSignupWrapper } from "../../../styles/loginStyles";
import { ROUTES } from "../../../routes/routeConstants";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../../../services/authApi";
import { toast } from "react-toastify";

import { setUserDetails, setToken } from "../../../store/authSlice";
import Spinner from "../../../components/Spinner";

const LoginForm = () => {
  const [form] = Form.useForm();

  // const token = useSelector(state => console.log('state', state) );
  // console.log('token from login', token)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginMutation, { isLoading, error }] = useLoginMutation();

  const login = useCallback(
    async (payload) => {
      try {
        const response = await loginMutation({
          email: payload?.email,
          password: payload?.password,
        }).unwrap();

        console.log("response", response);

        if (response) {
          dispatch(setToken(response?.token));
          localStorage.setItem("token", response?.token);
          localStorage.setItem("userDetails", JSON.stringify(response?.user));
          dispatch(setUserDetails(response?.user));
          response.user.role !== "admin" ? navigate(ROUTES.EDITPROFILE) : navigate(ROUTES.USERDETAILS)
        }
      } catch (error) {
        console.log("Error on SignUp From: ", error);

        toast(error?.data.message);
      }
    },
    [dispatch, loginMutation, navigate]
  );

  const onFinish = (values) => {
    console.log("Antd Response -> Success:", values);

    login({
      email: values?.email,
      password: values?.password,
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Antd Response -> Failed:", errorInfo);

    // toast.error("Failed to Login", {
    //   position: toast.POSITION.TOP_LEFT,
    // });
  };

  return (
    <>
      {isLoading && <Spinner />}

      <StyledSignupWrapper>
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
            label="Email"
            name="email"
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
            <Input placeholder="Enter Your Email" />
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
            <Input.Password placeholder="Enter Your Password" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <div className="remember-forget">
              <Checkbox>Remember me</Checkbox>
              <Link to={ROUTES.FORGETPASSWORD}>
                <span>Forget password?</span>
              </Link>
            </div>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </StyledSignupWrapper>
    </>
  );
};

export default LoginForm;
