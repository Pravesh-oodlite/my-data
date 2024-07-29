import styled from "styled-components";

export const StyledLoginWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  .left-container {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    .form-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 20px 100px;

      h2 {
        font-weight: 700;
        font-size: 12px;
        position: relative;

        &::before {
          content: "";
          position: absolute;
          width: 3px;
          height: 15px;
          left: -5px;
          background-color: #9437d2;
        }
      }

      h1 {
        font-weight: 900;
        font-size: 42px;
        margin: 0;

        &:first-of-type {
          margin-top: 50px;
        }
      }

      p {
        font-weight: 500;
        font-size: 11px;
        color: gray;
      }

      .input-container {
        width: 100%;

        display: flex;
        /* border: 2px solid; */
      }

      .not-account {
        font-size: 10px;
        color: gray;
        margin-top: 32px;

        a {
          color: #9437d2;
          font-weight: 700;
          cursor: pointer;

          &:hover {
            color: #4d0e77;
          }
        }
      }
    }
  }

  .image-container {
    padding: 6px;
    width: 50%;
    height: 620px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      border-radius: 16px;
      object-fit: cover;
    }
  }
`;

export const StyledSignupWrapper = styled.div`
  width: 100%;
  /* margin-top: 14px; */

  form {
    margin-top: 24px;
    width: 70%;

    .ant-form-item {
      margin: 10px 0 !important;

      .ant-form-item-label {
        padding: 0 !important;

        .ant-form-item-required {
          color: gray;
          font-size: 12px;
        }
      }
    }

    .checkbox-container {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;

      .ant-checkbox-checked .ant-checkbox-inner {
        background-color: #9437d2;
        border-color: #9437d2;
      }

      span {
        font-size: 10px;
        color: gray;
      }

      a {
        font-size: 10px;
        color: gray;

        &:hover {
          color: #9437d2;
        }
      }
    }

    .ant-checkbox {
      font-size: 10px;
      color: gray;
    }

    .ant-checkbox-wrapper:hover .ant-checkbox-inner,
    .ant-checkbox:hover
      .ant-checkbox-inner
      .ant-checkbox-input:focus
      + .ant-checkbox-inner {
      border-color: #9437d2 !important;
    }

    .ant-form-item {
      .ant-form-item-control-input-content {
        button {
          background-color: #9437d2;
          margin-top: 25px;
          padding: 0 24px;

          &:hover {
            background-color: #4d0e77;
          }
        }

        .remember-forget {
          display: flex;
          align-items: center;
          justify-content: space-between;

          .ant-checkbox-wrapper,
          span {
            font-size: 12px;
            color: gray;
          }

          span {
            cursor: pointer;
            &:hover {
              color: #9437d2;
            }
          }

          .ant-checkbox-checked {
            .ant-checkbox-inner {
              background-color: #9437d2;
              border-color: #4d0e77;
            }
          }
        }
      }
    }
  }
`;

export const StyledRegistrationWrapper = styled.div`
  width: 100%;

  h1 {
    /* font-size: 16px !important; */
    color: #9437d2;
    margin: 0 !important;
    padding: 16px 0;
    /* text-decoration: underline #9437d2 2px; */
  }

  form {
    width: 70%;
    .ant-form-item {
      margin: 10px;

      .ant-form-item-label {
        padding: 0 !important;

        .ant-form-item-required {
          color: gray;
          font-size: 12px;
        }
      }

      .ant-radio-wrapper {
        .ant-radio-checked .ant-radio-inner {
          border-color: #9437d2;
          background-color: #9437d2;
        }

        .ant-radio:hover .ant-radio-inner {
          border-color: #9437d2;
        }
      }

      .ant-form-item-control-input-content {
        button {
          background-color: #9437d2;
          margin-top: 12px;
          padding: 0 24px;

          &:hover {
            background-color: #4d0e77;
          }
        }
      }
    }
  }
`;

export const StyledForgetPasswordWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .inner-container {
    width: 385px;
    padding: 56px 40px;
    box-shadow: 1px 1px 8px rgba(148, 55, 210, 0.4);

    h1 {
      padding: 0 0 25px 0;
      color: #9437d2;
      text-align: center;
    }

    .ant-form {
      .ant-form-item {
        .ant-form-item-required {
          font-size: 12px;
          text-transform: uppercase;
          color: gray;
        }

        .ant-form-item-control-input-content {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 15px;

          .ant-btn-primary {
            margin-top: 32px;
            width: 50%;
            background-color: #9437d2;

            &:hover {
              background-color: #4d0e77;
            }
          }
        }
      }
    }
  }
`;

export const StyledResetPasswordWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .inner-container {
    width: 385px;
    /* background-color: whitesmoke; */
    padding: 56px 40px;
    box-shadow: 1px 1px 8px rgba(148, 55, 210, 0.4);

    h1 {
      padding: 0 0 25px 0;
      color: #9437d2;
      text-align: center;
    }

    .ant-form {
      .ant-form-item {
        .ant-form-item-required {
          font-size: 12px;
          text-transform: uppercase;
          color: gray;
        }

        .ant-form-item-control-input-content {
          display: flex;
          justify-content: space-between;
          align-items: end;

          .ant-btn-primary {
            margin-top: 10px;
            background-color: #9437d2;

            &:hover {
              background-color: #4d0e77;
            }
          }
        }
      }
    }
  }
`;
