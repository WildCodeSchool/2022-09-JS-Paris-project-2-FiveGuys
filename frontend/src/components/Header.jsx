import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import ConnexionContext from "../contexts/connexionContext";

function Header() {
  const { userInfo } = useContext(ConnexionContext);

  return (
    <div className="header">
      <BurgerMenu />
      <div className="header-list">
        <ul>
          <li>
            <Link to="/aboutUs">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/credits">Credits</Link>
          </li>
        </ul>
      </div>
      <div className="header-title">
        <Link to="/"> Meteo Wars</Link>
      </div>
      <div className="header-list">
        <li id="signup-button">
          <Link to="/account">
            {Object.keys(userInfo.info).length === 0
              ? "Sign Up"
              : `Welcome ${userInfo.info?.surname}!`}
          </Link>
        </li>
      </div>
    </div>
  );
}

export default Header;
