import React from "react";
import Logo from "../style/assets/Logo.png";
import "../style/Footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <img src={Logo} alt="Logo" className="logo" />
      </footer>
    </div>
  );
}
export default Footer;
