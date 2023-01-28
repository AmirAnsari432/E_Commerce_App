import React from "react";
import BreadCrum from "../component/BreadCrum";

const ResetPassword = () => {
  return (
    <>
      <BreadCrum title="Reset Password" />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card text-center">
                <h3 className="py-2">Reset Password</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="password"
                      clasaName="form-control mt-1"
                      placeholder="Password"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      clasaName="form-control mt-1"
                      placeholder="Confirm Password"
                    />
                  </div>
                  <div>
                    <button className="button">Ok</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
