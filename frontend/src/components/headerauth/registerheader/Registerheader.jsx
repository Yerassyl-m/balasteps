import React from 'react';
import "./Registerheader.css";
import logo from "../../../assets/logo_header.png";
import { useNavigate } from 'react-router-dom';
function Registerheader() {
    const navigate = useNavigate();
    const handclick = () => {
        navigate("/login");
    };
    const handclick1 = () => {
        navigate("/");
    };
    

  return (
    <div className="register_headerall">
        <div className="register_header_img">
            <a onClick={handclick1} href="#main"><img className="register_header_img"  src={logo} alt="" /></a>
        </div>
        <div className="register_header_button">
            <button onClick={handclick} className="register_header_button">Login</button>
        </div>

    </div>
  );
}
export default Registerheader;
