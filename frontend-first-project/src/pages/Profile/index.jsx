import React, { useCallback, useEffect, useState } from "react";
import {
  EditOutlined,
  LoadingOutlined,
  PlusOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  message,
  Upload,
  Avatar,
  Form,
  Input,
  Button,
  Select,
  DatePicker,
} from "antd";
import { StyledEditProfileWrapper } from "../../styles/editProfileStyles";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { capitalizeFirstLetter } from "../../utils";
import { useGetUserQuery, useUpdateUserMutation } from "../../services/user";
import Spinner from "../../components/Spinner";
import { toast } from "react-toastify";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  console.log(file);

  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const EditProfile = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const userDetails = useSelector((state) => state?.auth?.userDetails);
  const [userUpdateMutation, { isLoading, error }] = useUpdateUserMutation();
  const { data, isLoading: userLoader } = useGetUserQuery({
    id: userDetails._id,
  });

  console.log("data when useGetUserQuery is execute -->", data?.data);

  const updateUserFunction = useCallback(
    async (payload) => {
      try {
        const response = await userUpdateMutation({
          firstname: payload?.firstname,
          lastname: payload?.lastname,
          dob: payload?.dob,
          gender: payload?.gender,
          email: payload?.email,
          description: payload?.description,
        }).unwrap();

        if (response) {
          console.log("response when update user profile -->", response);
          toast(response.message)
        }
      } catch (error) {
        console.log("while updating error -->", error);
        toast(error?.message);
      }

      console.log("inside userUpdateMutation ----> checking --->")  
    },
    [userUpdateMutation]
  );

  const handleChange = (info) => {
    console.log(info);
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      {/* <PlusOutlined /> */}
      {loading ? <LoadingOutlined /> : <EditOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);

    updateUserFunction({
      firstname: values?.firstname,
      lastname: values?.lastname,
      email: values?.email,
      gender: values?.gender,
      dob: values?.dob,
      description: values?.description,
    });

    edit && setEdit(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // const onFill = () => {
  //   form.setFieldsValue({

  //   });
  // };

  // const onReset = () => {
  //   form.resetFields();
  // };

  useEffect(() => {
    console.log("<--- inside useEffect --->");

    form.setFieldsValue({
      firstname: capitalizeFirstLetter(data?.data?.firstName),
      lastname: capitalizeFirstLetter(data?.data?.lastName),
      dob: moment(data?.data?.dob),
      gender: data?.data?.gender,
      email: data?.data?.email,
      description: data?.data?.description,
    });

    // form.setFieldsValue({
    //   firstname: capitalizeFirstLetter(userDetails?.firstName),
    //   lastname: capitalizeFirstLetter(userDetails?.lastName),
    //   dob: moment(userDetails?.dob),
    //   gender: userDetails?.gender,
    //   email: userDetails?.email,
    //   description: userDetails?.description,
    // });

    // console.log(form.getFieldValue())
  }, [form, data, userUpdateMutation]);

  const [edit, setEdit] = useState(false);

  return (
    <>
      {(userLoader || isLoading) && <Spinner />}

      <StyledEditProfileWrapper>
        <h1>Edit Profile</h1>

        <div className="avatar-form">
          <Upload
            name="avatar"
            listType="picture-circle"
            className="avatar-uploader"
            showUploadList={false}
            action="" // api
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="avatar"
                style={{
                  width: "100%",
                }}
              />
            ) : (
              uploadButton
            )}
          </Upload>

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
            <div className="first-last-name">
              <Form.Item
                label="First Name"
                name="firstname"
                rules={[
                  {
                    required: true,
                    message: "Please input your first name!",
                  },
                ]}
              >
                <Input disabled={!edit} />
              </Form.Item>

              <Form.Item
                label="Last Name"
                name="lastname"
                rules={[
                  {
                    required: true,
                    message: "Please input your last name!",
                  },
                ]}
              >
                <Input disabled={!edit} />
              </Form.Item>
            </div>

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
              <Input disabled={!edit} />
            </Form.Item>

            <div className="gender-dob">
              <Form.Item label="Gender" name="gender">
                <Select disabled={!edit}>
                  <Select.Option value="male">Male</Select.Option>
                  <Select.Option value="female">Female</Select.Option>
                  <Select.Option value="others">Others</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item label="DOB" name="dob">
                <DatePicker disabled={!edit} />
              </Form.Item>
            </div>

            <Form.Item
              label="Description"
              name="description"
              rules={[
                {
                  required: true,
                  message: "About Yourself!",
                },
              ]}
            >
              <Input.TextArea disabled={!edit} />
            </Form.Item>

            <div className="buttons-container">
              <Form.Item>
                <Button type="primary" onClick={() => setEdit(true)}>
                  Edit
                </Button>

                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </StyledEditProfileWrapper>
    </>
  );
};

export default EditProfile;
