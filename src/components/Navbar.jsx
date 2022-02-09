import { Button, Menu, Typography, Avatar, Dropdown } from "antd";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  HomeOutlined,
  DownOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons/lib/icons";
import icon from "../Images/logo.png";

const menu = (
  <Menu>
    <Menu.Item key="1" icon={<HomeOutlined className="nav-icons" />}>
      <Link to="/">Home</Link>
    </Menu.Item>
    <Menu.Item key="2" icon={<FundOutlined className="nav-icons" />}>
      <Link to="/cryptocurrencies">Cryptocurrencies</Link>
    </Menu.Item>
    <Menu.Item key="3" icon={<BulbOutlined className="nav-icons" />}>
      <Link to="/news">News</Link>
    </Menu.Item>
  </Menu>
);

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar
          src={icon}
          size="small"
          style={{ marginBottom: "10px", marginRight: "5px" }}
        />
        <Typography.Title level={3} className="logo">
          <Link to="/">Cryptobase </Link>
        </Typography.Title>
      </div>
      {toggle ? (
        <div className="nav-right">
          <Link to="/">
            <HomeOutlined className="nav-icons" /> Home
          </Link>
          <Link to="/cryptocurrencies">
            <FundOutlined className="nav-icons" /> Cryptocurrencies
          </Link>
          <Link to="/news">
            <BulbOutlined className="nav-icons" /> News
          </Link>
        </div>
      ) : null}
      <Dropdown overlay={menu}>
        <MenuOutlined className="hamburger-menu" />
      </Dropdown>
    </div>
  );
};

export default Navbar;
