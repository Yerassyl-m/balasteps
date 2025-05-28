import React, { useEffect } from "react";
import "./Login.css";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import Loginheader from "../../../components/headerauth/loginheader/Loginheader";

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("", { withCredentials: true })
      .then((response) => {
        if (response.data.loggedIn) {
          navigate("/symptom");
        }
      })
      .catch((error) => {
        console.error("Error checking login status:", error);
      });
  })

  const handclick = () => {
    navigate("/login");
  };
  const handclick2 = () => {
    navigate("/forgetpass");
  };
  const handclick3 = () => {
    navigate("/symptom");
  }

  return (
    <div className="login_page">
      <Loginheader />

      <div className="login_inside">
        <div className="login_form">
          <div className="register_form_title">
            <h1 style={{ color: "#4B163B" }}>Login</h1>
          </div>

          <div className="login_form_input">
            <input type="tel" name="phone" placeholder="+7 (___) ___-__-__" />
            <input type="password" placeholder="Password" />
          </div>

          <div className="login_under">
            <button onClick={handclick3} className="login_form_button">Login</button>
            <div className="login_form_checkbox">
              <a onClick={handclick2} href="/forgetpass">Forgot password?</a>
              <a onClick={handclick} href="/register">
                New user? Register
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;