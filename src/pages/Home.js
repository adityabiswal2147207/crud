import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsersStart, loadUsersStart } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import { Table } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
//import { Link } from 'react-router-dom';
import "../App.css";
import { toast } from "react-toastify";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = useSelector((state) => state.data);
  //const {userId} = useSelector(state => state.data)
  const handleDelete = (id) => {
    dispatch(deleteUsersStart(id.id));
    if (window.confirm("Are you sure ?")) {
      dispatch(deleteUsersStart(id.id));
      toast.success("User Deleted Successfully");
    }
  };

  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "3",
      title: "Email",
      dataIndex: "email",
    },
    {
      key: "4",
      title: "Phone",
      dataIndex: "phone",
    },
    {
      key: "5",
      title: "Address",
      dataIndex: "address",
    },
    {
      key: "6",
      title: "Actions",
      render: (key) => {
        return (
          <>
            <DeleteOutlined
              onClick={() => handleDelete(key)}
              style={{ color: "red" }}
            />
            {/* <EditOutlined onClick={()=>navigate(`/AddEditUser/${key.id}`)} style={{ marginLeft: "12px", color:"green"}} /> */}
          </>
        );
      },
    },
  ];

  useEffect(() => {
    dispatch(loadUsersStart());
  }, []);
  return (
    <div className="Table">
      <Table columns={columns} dataSource={users} bordered></Table>
      {/* <Button danger onClick={()=>handleDelete(users.id)}>Delete</Button>
        <Link to={`/AddEditUser/${users.id}`}>
            <Button>Add</Button>
        </Link> */}
      {/* <Link to={`/UserInfo/${users.id}`}>
            <Button>Info</Button>
        </Link> */}
    </div>
  );
};

export default Home;
