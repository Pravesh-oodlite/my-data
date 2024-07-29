// Spinner.js
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Spin } from "antd";

// Global styles to apply the background blur effect
const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

// Styled component for the spinner wrapper
const SpinnerWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(1px);
  z-index: 1000;
`;

const Spinner = () => (
  <>
    <GlobalStyle />
    <SpinnerWrapper>
      <Spin size="large" />
    </SpinnerWrapper>
  </>
);

export default Spinner;
