import Sider from "antd/es/layout/Sider";
import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { itemsMenu } from "../../constants/menuConstants";
import { useSelector } from "react-redux";

const SidebarSection = () => {
  const Icon = ({ src }) => {
    return <img src={src} />;
  };

  const userDetails = useSelector((state) => state?.auth?.userDetails)
  const items = itemsMenu(userDetails?.role)

  console.log("userdetails Role ----> ", userDetails?.role)
  
  return (
    <>
      <Sider>
        <Menu>
          {items.map((item) => (
            <Menu.Item key={item.key} icon={<Icon src={item?.icon} />}>
              <Link to={item.route}> {item.label} </Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
    </>
  );
};

export default SidebarSection;
