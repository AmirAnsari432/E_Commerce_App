import React from "react";
import { Link } from "react-router-dom";
import BreadCrum from "../component/BreadCrum";
import Container from "../component/Container";

const Login = () => {
  return (
    <>
      <BreadCrum title="Login" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card text-center">
              <h3 className="py-2">Log in</h3>
              <form action="" className="d-flex flex-column gap-15">
                <div>
                  <input
                    type="email"
                    clasaName="form-control text-type mt-1"
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
                <div>
                  <Link className="text-dark" to="/forgotPassword">
                    Forget Password
                  </Link>
                </div>
                <div className="d-flex justify-content-center gap-15 align-items-center">
                  <button className="button border-0">Login</button>
                  <Link to="/signup" className="button signup text-white">
                    SignUp
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
