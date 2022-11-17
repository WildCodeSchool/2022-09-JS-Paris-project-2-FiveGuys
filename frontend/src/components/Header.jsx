import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";

function Header() {
  return (
    <div className="header">
      <BurgerMenu />
      <div className="header-list">
        <ul>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/aboutUs">About Us</Link>
          </li>
        </ul>
      </div>
      <div className="header-title">
        <Link to="/"> Meteo Wars</Link>
      </div>
    </div>
  );
}

export default Header;
