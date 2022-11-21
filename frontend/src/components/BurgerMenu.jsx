import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function BurgerMenu() {
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div className="burger">
      <button type="button" className="burger-menu" onClick={updateMenu}>
        <div className={burgerClass}> </div>
        <div className={burgerClass}> </div>
        <div className={burgerClass}> </div>
      </button>
      <button type="button" className={menuClass}>
        <div className="classname-link">
          <div className="link">
            <Link to="/credits">Credits</Link>
          </div>
          <div className="link">
            <Link to="/contact">Contact</Link>
          </div>
          <div className="link">
            <Link to="/aboutUs">About Us</Link>
          </div>
        </div>
      </button>
    </div>
  );
}

export default BurgerMenu;
