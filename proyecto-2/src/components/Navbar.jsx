import React from "react";
import logo from "../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo del Sitio" />
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/admin">Administración</a>
        </li>{" "}
        {}
      </ul>
    </nav>
  );
}

export default Navbar;
