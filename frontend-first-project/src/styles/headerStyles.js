import styled from "styled-components";

export const StyledHeaderWrapper = styled.div`
  .ant-layout-header {
    background-color: #9437d2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 56px;

    .header-logo {
      display: flex;
      gap: 10px;

      span {
        color: white;
        font-size: 26px;
        font-weight: 600;
      }
    }

    .dropdown {
      .ant-btn {
        &:hover {
          background-color: #9437d2;
          border-color: white;
          color: white;
          font-weight: 600;
        }
      }
    }
  }
`;
