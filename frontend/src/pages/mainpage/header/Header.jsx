import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../../../assets/logo_header.png';
import account from '../../../assets/account.png';

function Header() {
  const navigate = useNavigate();
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };


  const handclick = () => {
    navigate("/register");
  }
  const handclick2 = () => {
    navigate("/login");
  }

  return (
    <div className="header">
      <div className="header_logo">
        <a> <img src={logo} alt="Logo" /></a>
      </div>
      <div className='left_side'>
        <div className='link_all'>
          <a href="#news" onClick={(e) => { e.preventDefault(); scrollToSection("news"); }}>News</a>
          <a href="#ikomek" onClick={(e) => { e.preventDefault(); scrollToSection("ikomek"); }}>iKomek</a>
          <a href="#forums" onClick={(e) => { e.preventDefault(); scrollToSection("forums"); }}>Forums</a>
          <a href="#marketplace" onClick={(e) => { e.preventDefault(); scrollToSection("marketplace"); }}>Marketplace</a>
          <a href="#aboutus" onClick={(e) => { e.preventDefault(); scrollToSection("aboutus"); }}>About us</a>
        </div>
        <div className='img_account'>
          {/* <button onClick={handclick} className='Register_button'>Register</button>
                <button onClick={handclick2} className='Login_button'>Login</button> */}
          <button onClick={handclick2} className='img_b'><img className='img_logo' src={account} alt="" /></button>
        </div>
      </div>
    </div>
  )
}
export default Header

