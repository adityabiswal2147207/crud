import React from "react";
import { Menu } from "antd";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import {
  AndroidOutlined,
  EditOutlined,
  HomeOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Home from "./pages/Home";
import About from "./pages/About";
import AddEditUser from "./pages/AddEditUser";
import UserInfo from "./pages/UserInfo";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App" style={{ display: "flex", flexDirection: "row" }}>
      <ToastContainer />
      <Menu
        theme="dark"
        onClick={({ key }) => {
          navigate(key);
        }}
        items={[
          { label: "Home", key: "/", icon: <HomeOutlined /> },
          // { label: "About", key: "/About", icon: <AndroidOutlined /> },
          { label: "Add / Edit", key: "/AddEditUser", icon: <EditOutlined /> },
          // { label: "UserInfo", key: "/UserInfo", icon: <UserOutlined /> },
        ]}
      ></Menu>
      <Content />
    </div>
  );
}

function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/AddEditUser" element={<AddEditUser />} />
        {/* <Route path="/UserInfo" element={<UserInfo />} /> */}
      </Routes>
    </div>
  );
}

export default App;
