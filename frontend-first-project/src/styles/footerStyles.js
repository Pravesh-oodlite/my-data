import styled from "styled-components";

export const StyledFooterWrapper = styled.div`
  .ant-layout-footer {
    background-color: black;
    position:absolute;
    width:100%;
    bottom:0;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;

    .privacy-tab {
      display: flex;
      justify-content: center;
      gap: 24px;

      .copyright p{
        color:white;
        font-weight: 600;
      }
    }
  }
`;
