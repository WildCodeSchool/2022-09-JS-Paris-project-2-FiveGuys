import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import ConnexionContext from "../contexts/connexionContext";

function Header() {
  const { userInfo } = useContext(ConnexionContext);

  return (
    <div className="header">
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
          <li>
            <Link to="/account">
              {Object.keys(userInfo.info).length === 0
                ? "sign in"
                : `Welcome ${userInfo.info?.surname}!`}
            </Link>
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
