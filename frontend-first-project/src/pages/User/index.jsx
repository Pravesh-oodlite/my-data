import { Table, Button } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { StyledUsersWrapper } from "../../styles/usersStyles";
import { DeleteOutlined } from "@ant-design/icons";
import { useDeleteUserMutation, useGetUsersQuery } from "../../services/user";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner";
import { capitalizeFirstLetter } from "../../utils";

const User = () => {
  const [deleteMutation, {isLoading, error}] = useDeleteUserMutation()
  const { data: usersDataList, isLoading: userLoader } = useGetUsersQuery();
  console.log("usersDataList ---> ", usersDataList?.data);

  // const data = [
  //   {
  //     key: "1",
  //     name: "John Brown",
  //     email: "john.brown@gmail.com",
  //   },
  //   {
  //     key: "2",
  //     name: "Jim Green",
  //     email: "jim.green@gmail.com",
  //   },
  //   {
  //     key: "3",
  //     name: "Joe Black",
  //     email: "joe.black@gmail.com",
  //   },
  //   {
  //     key: "4",
  //     name: "Karan Singh",
  //     email: "karan.singh@gmail.com",
  //   },
  //   {
  //     key: "5",
  //     name: "Pankaj Pathak",
  //     email: "pankaj.pathak@gmail.com",
  //   },
  // ];

  const handleDelete = useCallback(async (record) => {
    try {
      const response = await deleteMutation({
        id: record._id,
      });

      if (response) {
        console.log("response on handleDelete -->", response);
        toast(response?.data?.message)
      }
    } catch (error) {
      console.log("error when deleting-> ", error);
      toast(error.message);
    }

    console.log("record", record);
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "firstName",
      render: (item, index, key) => {
        return <div>{capitalizeFirstLetter(item)}</div>;
      },
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      render: (text, record) => (
        <DeleteOutlined onClick={() => handleDelete(record)} />
      ),
    },
  ];

  return (
    <>
      {(userLoader || isLoading) && <Spinner />}
      <StyledUsersWrapper>
        <h1>User Details</h1>
        <Table columns={columns} dataSource={usersDataList?.data ?? []} />
      </StyledUsersWrapper>
    </>
  );
};

export default User;
