import React from "react";
import BreadCrum from "../component/BreadCrum";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <BreadCrum title="SignUp" />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card text-center">
                <h3 className="py-2">Sign Up</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      clasaName="form-control mt-1"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      clasaName="form-control mt-1"
                      placeholder="Last Name "
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      clasaName="form-control mt-1"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      clasaName="form-control mt-1"
                      placeholder="Password"
                    />
                  </div>
                  <div className="d-flex justify-content-center gap-15 align-items-center">
                    <Link to="/signup" className="button signup text-white">
                      SignUp
                    </Link>
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

export default SignUp;
