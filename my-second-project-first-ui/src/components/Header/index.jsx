import React from "react";
import { StylesHeaderWrapper } from "../../styles/HeaderStyles";
// import { CiGlobe } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import SearchBlock from "../SearchBlock";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const items = [
  {
    key: "1",
    label: (
      <a rel="noopener noreferrer" href="#" className="active">
        Sign up
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a rel="noopener noreferrer" href="#">
        Log in
      </a>
    ),
  },
  {
    type: "divider",
  },
  {
    key: "3",
    label: (
      <a rel="noopener noreferrer" href="#">
        Airbnb your home
      </a>
    ),
    // disabled: true,
  },
  {
    key: "4",
    // danger: true,
    label: (
      <a rel="noopener noreferrer" href="#">
        Help Centre
      </a>
    ),
  },
];

const HeaderSection = () => {
  return (
    <>
      <StylesHeaderWrapper>
        <div className="navigation-bar">
          <div className="left-part">
            <a>
              <div className="image-container">
                <img src="/airbnb-logo01.png" alt="Airbnb logo" />
              </div>
            </a>
          </div>
          <div className="middle-part">
            <div className="buttons-container">
              <button className="button-inactive">Stays</button>
              <button className="button-active">Experiences</button>
            </div>
          </div>
          <nav className="right-part">
            <div className="content-container">
              <a>Airbnb your home</a>
              <button>
                {/* <CiGlobe /> */}
                <img src="/icons/globe-icon.png" alt="" />
              </button>
            </div>

            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
              placement="bottomRight"
              // overlayStyle={{ width: "238px" }}
              getPopupContainer={(trigger) => trigger.parentElement}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <button className="dropdown-button">
                    <img src="/icons/hamburger-icon.png" alt="" />
                    <RxAvatar />
                  </button>
                </Space>
              </a>
            </Dropdown>
          </nav>
        </div>
        <SearchBlock />
      </StylesHeaderWrapper>
    </>
  );
};

export default HeaderSection;

  
