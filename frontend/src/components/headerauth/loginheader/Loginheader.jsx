import React from 'react';
import "./Loginheader.css";
import logo from "../../../assets/logo_header.png";
import { useNavigate } from 'react-router-dom';

function Loginheader() {
    const navigate = useNavigate();
    const handclick = () => {
        navigate("/register");
    };
    const handclick1 = () => {
        navigate("/");
    };
  return (
    <div className="login_headerall">
        <div className="login_header_img">
            <a onClick={handclick1} href="#main"><img className="login_header_img"  src={logo} alt="" /></a>
        </div>
        <div className="login_header_button">
            <button onClick={handclick} className="login_header_button">Register</button>
        </div>

    </div>
  );
}
export default Loginheader;
