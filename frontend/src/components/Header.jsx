import React from "react";

function Header({ currentPage, handleMenuItem }) {
  return (
    <div className="header">
      <div className="header-title">
        <h1>Meteo Wars</h1>
      </div>
      <div>
        <ul className="header</div>-list">
          <li className={currentPage === "news" ? "active" : ""}>
            <button type="button" onClick={() => handleMenuItem("news")}>
              News
            </button>
          </li>
          <li className={currentPage === "contact" ? "active" : ""}>
            <button type="button" onClick={() => handleMenuItem("contact")}>
              Contact
            </button>
          </li>
          <li className={currentPage === "about" ? "active" : ""}>
            <button type="button" onClick={() => handleMenuItem("about")}>
              About Us
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
