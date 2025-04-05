import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();

  const handleNav = (path) => {
    setClick(false);
    navigate(path);
  };

  return (
    <header>
      <nav className="header-container">
        <div className="logo" onClick={() => handleNav("/")}>
          <img src={logo} alt="BrightMinds Logo" />
        </div>

        <ul className={click ? "mobile-nav" : "nav"}>
          <li onClick={() => handleNav("/")}>Home</li>
          <li onClick={() => handleNav("/courses")}>All Courses</li>
          <li onClick={() => handleNav("/about")}>About</li>
          <li onClick={() => handleNav("/teacher")}>Our Professional</li>
          <li onClick={() => handleNav("/activities")}>Activities</li>
          <li onClick={() => handleNav("/contact")}>Contact</li>
        </ul>

        <div className="auth-buttons">
          <button className="btn login" onClick={() => handleNav("/login")}>
            Login
          </button>
          <button className="btn signup" onClick={() => handleNav("/signup")}>
            Sign Up
          </button>
        </div>

        <button className="toggle" onClick={() => setClick(!click)}>
          <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;
