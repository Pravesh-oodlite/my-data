import { Header } from "antd/es/layout/layout";
import React from "react";
import { StyledHeaderWrapper } from "../../styles/headerStyles";
import { Button, Dropdown } from "antd";
import { ROUTES } from "../../routes/routeConstants";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../store/authSlice";
import { capitalizeFirstLetter } from "../../utils";

const HeaderSection = () => {
  const dispatch = useDispatch();
  const currentUserDetails = useSelector((state) => state?.auth?.userDetails);
  // console.log("currentUserDetails ---> ", currentUserDetails);

  const handleSignOut = () => {
    dispatch(setToken());
    localStorage.removeItem("token");
  };

 

  const items = [
    {
      key: "1",
      label: <span>{currentUserDetails?.email}</span>,
    },
    {
      key: "2",
      label: (
        <Link to={ROUTES.LOGIN} className="signout" onClick={handleSignOut}>
          Sign Out
        </Link>
      ),
    },
  ];

  return (
    <>
      <StyledHeaderWrapper>
        <Header>
          <div className="header-logo">
            <span>OGO</span>
            <span>Pravesh</span>
          </div>

          <div className="dropdown">
            <Dropdown
              menu={{
                items,
              }}
              placement="bottomLeft"
              arrow
              // open={true}
            >
              <Button>
                {capitalizeFirstLetter(currentUserDetails?.name) ||
                  capitalizeFirstLetter(currentUserDetails?.firstName)}
              </Button>
            </Dropdown>
          </div>
        </Header>
      </StyledHeaderWrapper>
    </>
  );
};

export default HeaderSection;
