import styled from "styled-components";

export const StyledAppLayoutWrapper = styled.div`
  .ant-layout {
    height: 100vh;

    .ant-layout-sider {
      flex: 0 0 20% !important;
      max-width: 20% !important;
      min-width: 20% !important;
      width: 20% !important;
      background-color: #091526;

      .ant-menu {
        background-color: #091526;
        display: flex;
        flex-direction: column;
        gap: 12px;

        .ant-menu-item-selected{
            background: none;
        }

        .ant-menu-item {
          display: flex;
          align-items: center;
          gap: 8px;

          &:hover {
            background-color: #030c18;
          }

          img {
            height: 32px;
            color: white;
          }

          .ant-menu-light{
            background: #030c18;
          }

          .ant-menu-title-content {
            a {
              color: white;
              font-size: 14px;
              font-weight: 600;
            }
          }
        }

      }
    }
  }
`;
