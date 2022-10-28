import React from "react";
import "../style/Planet.css";
import planets from "../services/planetData";

function Planet({ size, name, pic, bgsize, position }) {
  console.log(size);
  console.log(pic);
  const idToGive = {
    backgroundImage: `url("${pic}")`,
    width: `${size}rem`,
    height: `${size}rem`,
    backgroundSize: `${bgsize}%`,
  };

  const containerPosition = {
    marginTop: `${position.top}%`,
    marginLeft: `${position.left}%`,
  };

  const elem = (
    <div className="planet-container" style={containerPosition}>
      <button type="button" className="planet-button" style={idToGive}>
        {" "}
      </button>
      <div className="planet-name">{name}</div>
    </div>
  );
  return elem;
}

export default Planet;
