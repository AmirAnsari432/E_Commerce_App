import React from "react";
import { Link } from "react-router-dom";
import BreadCrum from "../component/BreadCrum";
import Container from "../component/Container";

const ForgotPass = () => {
  return (
    <>
      <BreadCrum title="forgot password" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card text-center">
              <h3>Reset your Password</h3>
              <p> We will send you an email to reset your password</p>
              <input />
              <div>
                <button className="button mt-3 justify-content-center flex-column align-items-center my-2 py-2 flex-wrap">
                  Submit
                </button>
                <div>
                  <Link to="/login">Cancel</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ForgotPass;
