import React from "react";
import "./Planet.css";
import { Link } from "react-router-dom";

function Planet({ size, name, pic, bgsize }) {
  const planetStyle = {
    backgroundImage: `url("${pic}")`,
    width: `${size}rem`,
    height: `${size}rem`,
    backgroundSize: `${bgsize}%`,
  };

  return (
    <div className="planet-container">
      <Link to={`planets/${name}`}>
        <div className="planet-button" style={planetStyle} />
      </Link>
    </div>
  );
}

export default Planet;
