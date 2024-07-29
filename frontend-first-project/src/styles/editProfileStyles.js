import { styled } from "styled-components";

export const StyledEditProfileWrapper = styled.div`
  h1 {
    color: #9437d2;
    padding: 12px 66px;
  }

  .avatar-form {
    margin: 0px 66px;
    background-color: white;
    padding: 0px 18px;
    display: flex;
    gap: 34px;
    box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.3), -2px -3px 6px rgba(0, 0, 0, 0.2);

    .ant-upload-wrapper {
      margin-top: 13px;
      padding: 8px;
      display: flex;

      .ant-upload.ant-upload-select {
        &:hover{
          border-color: #9437d2;
        }
      }
    }

    .ant-form {
      padding: 16px 10px;

      .first-last-name {
        display: flex;
        gap: 20px;
      }

      .buttons-container {
        .ant-form-item-control-input-content {
          display: flex;
          gap: 20px;
        }
      }

      .ant-form-item {
        .ant-form-item-label {
          padding: 0 !important;
          .ant-form-item-required {
            font-size: 10px;
          }
          label{
            font-size:10px;
          }
        }

        .ant-btn {
          background-color: #9437d2;

          &:hover {
            background-color: #4d0e77;
          }
        }

        .ant-form-item-control {
          /* width: 202px; */

          .ant-form-item-control-input-content {
            .ant-input-outlined  {
              /* width: "626px" !important; */
            }
          }
          .ant-select-show-arrow{
            width:150px;
          }
        }
      }
      .gender-dob{
        display:flex;
        gap:20px;
        justify-content: space-between;
      }
    }
  }
`;
