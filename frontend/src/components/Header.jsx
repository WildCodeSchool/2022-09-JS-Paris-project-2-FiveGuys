import React from "react";
import "../style/Header.css";

function Header({ currentPage, handleMenuItem }) {
  return (
    <div className="header">
      <div className="header-list">
        <ul>
          <li className={currentPage === "news" ? "active" : "header-item"}>
            <button
              className="header-button"
              type="button"
              onClick={() => handleMenuItem("news")}
            >
              News
            </button>
          </li>
          <li className={currentPage === "contact" ? "active" : "header-item"}>
            <button
              className="header-button"
              type="button"
              onClick={() => handleMenuItem("contact")}
            >
              Contact
            </button>
          </li>
          <li className={currentPage === "about" ? "active" : "header-item"}>
            <button
              className="header-button"
              type="button"
              onClick={() => handleMenuItem("about")}
            >
              About Us
            </button>
          </li>
        </ul>
      </div>
      <div className="header-title">Meteo Wars</div>
    </div>
  );
}

export default Header;
