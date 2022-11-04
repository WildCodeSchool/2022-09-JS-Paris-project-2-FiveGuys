import React from "react";
import "../style/Planet.css";
import { Link } from "react-router-dom";

function Planet({ size, name, pic, bgsize }) {
  const planetStyle = {
    backgroundImage: `url("${pic}")`,
    width: `${size}rem`,
    height: `${size}rem`,
    backgroundSize: `${bgsize}%`,
  };

  const elem = (
    <div className="planet-container">
      <Link to={`planets/${name}`}>
        <button type="button" className="planet-button" style={planetStyle}>
          {" "}
        </button>
      </Link>
    </div>
  );
  return elem;
}

export default Planet;
