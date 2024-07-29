import React from "react";
import HeaderSection from "../Header";
import SidebarSection from "../Sidebar";
import FooterSection from "../Footer";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { StyledAppLayoutWrapper } from "../../styles/layoutStyles";

const AppLayout = ({ children }) => {
  return (
    <>
      <StyledAppLayoutWrapper>
        <Layout>
          <HeaderSection />
          <Layout>
            <SidebarSection />
            <Content>{children}</Content>
          </Layout>
          <FooterSection />
        </Layout>
      </StyledAppLayoutWrapper>
    </>
  );
};

export default AppLayout;
