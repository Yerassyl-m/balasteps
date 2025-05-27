import React from "react";
import "./Forgetpassword.css";
// import { useNavigate } from "react-router-dom";
import Registerheader from "../../../components/headerauth/registerheader/Registerheader";

function Forgetpassword() {
  return (
    <div className="forget_page">
      <Registerheader />
      <div className="forget_inside">
        <div className="forget_form">
          <div className="forget_form_title">
            <h1 style={{ color: "#4B163B" }}>Validate email</h1>
          </div>

          <div className="forget_form_input">
            <h5 style={{ color: "#426B1F", fontSize: "17px" }}>
              For security reasons, we will send a text message containing a
              code to <br /> verify your email address.
            </h5>

            <div className="forget_form_input_under">
              <h5 style={{ color: "#000000" }}>Verification code :</h5>
              <input type="number" placeholder="Enter OTP" />
            </div>
          </div>

          <div className="forget_under">
            <button className="forget_form_button">Verify email</button>
            <div className="forget_form_checkbox"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Forgetpassword;
