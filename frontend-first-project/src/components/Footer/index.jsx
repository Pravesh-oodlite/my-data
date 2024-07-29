import { Footer } from "antd/es/layout/layout";
import React from "react";
import { StyledFooterWrapper } from "../../styles/footerStyles";

const FooterSection = () => {
  return (
    <>
      <StyledFooterWrapper>
        <Footer>
          <div className="privacy-tab">
            <div className="copyright">
              <p>2024 oodles technology</p>
            </div>
            <div className="copyright">
              <p>All right reserved</p>
            </div>
          </div>
        </Footer>
      </StyledFooterWrapper>
    </>
  );
};

export default FooterSection;
