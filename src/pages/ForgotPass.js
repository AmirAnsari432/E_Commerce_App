import React from "react";
import BreadCrum from "../component/BreadCrum";

const ForgotPass = () => {
  return (
    <>
      <BreadCrum title="forgot password" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card text-center">
              <h3>Reset your Password</h3>
              <p> We will send you an email to reset your password</p>
              <input />
              <div>
                <button className="button my-2 py-2">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPass;
