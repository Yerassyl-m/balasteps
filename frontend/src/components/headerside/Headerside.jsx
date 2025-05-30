import React from "react";
import { useNavigate } from "react-router-dom";
import "./Headerside.css";
import burger from "../../assets/burgermenu.png";
import account from "../../assets/account.png";
import dashboard from "../../assets/menu_dashboard.png";
import comment from "../../assets/comment_dashboard.png";
import logo_dashboard from "../../assets/logo_dashboard.png";
import marketplace_dashboard from "../../assets/marketplace_dashboard.png";
import information_dashboard from "../../assets/information_dashboard.png";
import question_circle from "../../assets/question_circle.png";
import notification from "../../assets/notification.png"

function Headerside({ isOpen, setIsOpen }) {
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleClickLogo = () => {
    navigate("/");
    setIsOpen(false);
  };
  const handleClickLogo2 = () => {
    navigate("/symptom");
    setIsOpen(false);
  };

  const handleClickLogo3 = () => {
    navigate("/discussion");
    setIsOpen(false);
  };

  const handleClickLogo4 = () => {
    navigate("/login");
    setIsOpen(false);
  };



  React.useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="header_sideall">
      <div className="navbar_container">
        <div className="navbar">
          <div className={`menu-toggle ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
            <img className="header_side_img" src={burger} alt="Menu" />
          </div>

          <div className={`side-menu ${isOpen ? "active" : ""}`}>
            <button onClick={handleClickLogo} className="logo_burgermenu" style={{ border: "none", background: "none", padding: 0 }}>
              <div className="logo_burger_menu">
                <img className="logo_menu_side" width="200px" src={logo_dashboard} alt="Logo" />
              </div>
            </button>

            <div className="link_menuside">
              <ul>
                <li style={{ padding: "5px 25px" }}>
                  <img src={dashboard} width="20px" alt="" />
                  <button onClick={handleClickLogo2}>Symptom Tracker</button>
                </li>
                <li style={{ padding: "5px 25px" }}>
                  <img src={comment} width="20px" alt="" />
                  <button onClick={handleClickLogo3}>Discussion Forum</button>
                </li>
                <li style={{ padding: "5px 20px" }}>
                  <img src={information_dashboard} width="20px" alt="" />
                  <a onClick={handleClickLogo}>Information Hub</a>
                </li>
                <li style={{ padding: "5px 20px" }}>
                  <img src={marketplace_dashboard} width="20px" alt="" />
                  <a href="#">Marketplace</a>
                </li>
                <li style={{ padding: "5px" }}>
                  <img src={question_circle} width="20px" alt="" />
                  <a href="#">iKomek AI Assistant</a>
                </li>
              </ul>
            </div>

          </div>

          {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
        </div>
      </div>

      <div className="header_right_side">

        <div className="header_link_button">
          <a href="#" className="header_side_account">
            <img src={notification} alt="Account" />
          </a>

          <a onClick={handleClickLogo4} className="header_side_notification">
            <img src={account} alt="Account" />
          </a>
        </div>

        <button onClick={handleClickLogo} className="header_let_button">
          Log out
        </button>
      </div>
    </div>
  );
}

export default Headerside;