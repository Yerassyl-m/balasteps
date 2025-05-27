import React from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import Registerheader from "../../../components/headerauth/registerheader/Registerheader";
// import { useNavigate } from "react-router-dom";
function Register() {
      const navigate = useNavigate();
    const handclick = () => {
      navigate("/login");
    };
  return (
    <div className="register_page">
      <Registerheader />
      <div className="register_inside">
        <div className="register_form">
          <div className="register_form_title">
            <h1 style={{ color: "#4B163B" }}>Register</h1>
          </div>

          <div className="register_form_input">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Surname" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
          </div>

          <div className="register_under">
            <button className="register_form_button">Continue</button>
            <div className="register_form_checkbox">
              <h5>Already have an account?</h5>
              <a onClick={handclick} href="/login">Login</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
