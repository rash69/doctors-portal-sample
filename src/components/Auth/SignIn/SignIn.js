import React from "react";
import "./SignIn.css";
import Auth from "../auth";
import Header from "../../Header/Header";
import { withRouter } from "react-router-dom";

const SignIn = () => {
  const auth = Auth();
  const handleSignIn = () => {
    auth.SignIn().then((res) => {
      window.location.pathname = "/dashboard";
    });
  };
  const handleSignOut = () => {
    auth.signOut().then((res) => {
      window.location.pathname = "/";
    });
  };
  return (
    <>
      <Header />
      <section className="login-page">
        <div className="login-container">
          <div className="row">
            <div className="col-6">
              <div className="signIn-content">
                <div className="title-container">
                  <h1 className="text-info">
                    Sign in to access to the dashboard
                  </h1>
                </div>
                <div className="btn-container">
                  {auth.user ? (
                    <button className="btn btn-danger" onClick={handleSignOut}>
                      Sign Out
                    </button>
                  ) : (
                    <button className="btn btn-success" onClick={handleSignIn}>
                      Sign in with google
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withRouter(SignIn);
