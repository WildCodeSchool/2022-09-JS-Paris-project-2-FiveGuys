import React from "react";
import PropTypes from "prop-types";

function Header({ currentPage, setCurrentPage }) {
  // static defaultProps = {
  //     currentPage: 0
  //   }
  function handleClickHeader(page) {
    setCurrentPage(page);
  }
  return (
    <div className="header">
      <div className="header-title">
        <h1>Meteo Wars</h1>
      </div>
      <div>
        <ul className="header</div>-list">
          <li className={currentPage === "news" ? "active" : ""}>
            <button type="button" onClick={() => handleClickHeader("news")}>
              News
            </button>
          </li>
          <li className={currentPage === "contact" ? "active" : ""}>
            <button type="button" onClick={() => handleClickHeader("contact")}>
              Contact
            </button>
          </li>
          <li className={currentPage === "about" ? "active" : ""}>
            <button type="button" onClick={() => handleClickHeader("about")}>
              About Us
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

Header.propTypes = {
  currentPage: PropTypes.string,
  setCurrentPage: PropTypes.func,
};
export default Header;
