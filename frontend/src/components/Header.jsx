import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import ConnexionContext from "../contexts/connexionContext";
import BurgerMenu from "./BurgerMenu";

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
            {Object.keys(userInfo.info).length === 0 ? "Sign Up" : `My account`}
          </Link>
        </li>
      </div>
    </div>
  );
}

export default Header;
