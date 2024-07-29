import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import Registration from "./components/Registration";
import { StyledLoginWrapper } from "../../styles/loginStyles";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/routeConstants";

const FormCard = () => {
  const [register, setRegister] = useState(false);

  return (
    <>
      <StyledLoginWrapper>
        <div className="left-container">
          <div className="form-container">
            <h2>Hello Oodlite</h2>

            {!register && (
              <>
                <h1>Holla</h1>
                <h1>Welcome Back</h1>
                <p>Hey,welcome back to your special place</p>
              </>
            )}

            <div className="input-container">
              {!register ? (
                <LoginForm />
              ) : (
                <Registration register={register} setRegister={setRegister} />
              )}
            </div>
            {!register ? (
              <span className="not-account">
                Don't have an account?{" "}
                <Link onClick={() => setRegister(true)}>Sign Up</Link>{" "}
              </span>
            ) : (
              <span className="not-account">
                Have an account?{" "}
                <Link to={ROUTES.LOGIN} onClick={() => setRegister(false)}>
                  Sign In
                </Link>{" "}
              </span>
            )}
          </div>
        </div>

        <div className="image-container">
          <img
            src="https://cdn.dribbble.com/userupload/14898990/file/original-ba68e98ea10e1867e831884c3b153387.png?resize=752x"
            alt="form image"
          />
        </div>
      </StyledLoginWrapper>
    </>
  );
};

export default FormCard;
