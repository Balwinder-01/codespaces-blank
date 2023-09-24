import React, { useState } from "react";
import icon from "../../assets/logo.png";
import AboutAuth from "./AboutAuth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import { signup, login } from "../../api";

function Auth() {
  const [isSignup, setisSignup] = useState(false);
  const [Name, setName] = useState(" ");
  const [Email, setEmail] = useState(" ");
  const [Password, setPassword] = useState(" ");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSwitch = () => {
    setisSignup(!isSignup);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Email && Password) {
      alert("Enter email and password");
    }
    if (!isSignup) {
      if (!Name) {
        alert("Enter a name to continue");
      }
      dispatch(signup({ Name, Email, Password }, navigate));
    } else {
      dispatch(login({ Email, Password }, navigate));
    }
  };
  return (
    <section className="auth-section">
      {isSignup && <AboutAuth />}
      <div className="auth-container-2">
        {!isSignup && (
          <img src={icon} alt="Stack-overflow" className="login-logo" />
        )}

        <form onSubmit={handleSubmit}>
          {isSignup && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
          )}

          <label htmlFor="email">
            <h4>Email</h4>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label htmlFor="password">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>Password</h4>
              {!isSignup && (
                <p style={{ color: "#007ac6", fontSize: "13px" }}>
                  Forget Password
                </p>
              )}
            </div>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {isSignup && (
              <p style={{ color: "#666767", fontSize: "13px" }}>
                Password must contain atleast eight <br /> charachetrs,
                including at least 1 letter and 1 <br /> number
              </p>
            )}
          </label>
          {isSignup && (
            <label htmlFor="check">
              <input type="checkbox" id="check" />
              <p style={{ fontSize: "13px" }}>
                opt-in to recieve occasional, <br />
                product updates, user research invitations, <br />
                company announcement, and digests.{" "}
              </p>
            </label>
          )}

          <button type="submit" className="auth-btn">
            {isSignup ? "Signup" : "Log in"}
          </button>
          {isSignup && (
            <p style={{ color: "#666767", fontSize: "13px" }}>
              By clicking "Sign up", you Agree to our{" "}
              <span style={{ color: "#007ac6" }}>
                terms of <br />
                services
              </span>
              ,<span style={{ color: "#007ac6" }}>privacy policy</span> and
              <span style={{ color: "#007ac6" }}>cookies policy</span>.
            </p>
          )}
        </form>
        <p>
          {isSignup ? "Already have an account?" : "Don't have an Account? "}
          <button
            type="button"
            className="handle-switch-btn"
            onClick={handleSwitch}
          >
            {isSignup ? "Log in" : "Sign up"}
          </button>
        </p>
      </div>
    </section>
  );
}

export default Auth;
