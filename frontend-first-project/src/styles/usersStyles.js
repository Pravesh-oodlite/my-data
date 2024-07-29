import styled from "styled-components";

export const StyledUsersWrapper = styled.div`
  h1 {
    color: #9437d2;
    padding: 14px 66px;
  }

  .ant-table-wrapper {
    margin: 0px 66px;
    

    .ant-table-thead {
      background-color: #9437d2;

      .ant-table-cell {
        background: none;
        color: white;
        text-align: center;
      }
    }

    .ant-table-tbody {
      .ant-table-row {
        .ant-table-cell {
          text-align: center;

          .anticon-delete {
            font-size: 18px;
            cursor: pointer;

            &:hover {
              color: red;
            }
          }
        }
      }
    }

    .ant-pagination {
      .ant-pagination-item {
        border-color: #9437d2;

        &:hover {
          color: #9437d2;
        }
      }

      .ant-pagination-item-active a {
        color: #9437d2;

        &:hover {
          background-color: #9437d2;
          color: white;
        }
      }
    }
  }
`;
