import React from "react";
import "./Nav.css";
import { HashLink as Link } from "react-router-hash-link";
function Nav() {
  return (
    <div className="nav">
      <div className="nav__logo">
        <a href="/">
          <img className="logo" src={Logo} alt="" />
        </a>
      </div>

      <div className="nav__options">
        <Link to="/#projects-section">
          <p className="nav__links">PROJECTS</p>
        </Link>
        <Link to="/#contact-section">
          <p className="nav__links">CONTACTS</p>
        </Link>
        <Link to="/about">
          <p className="nav__links">ABOUT</p>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
