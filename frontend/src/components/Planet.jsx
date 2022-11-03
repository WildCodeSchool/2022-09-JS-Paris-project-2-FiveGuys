import React from "react";
import "../style/Planet.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import icon from "../style/assets/raincloud.png";

function Planet({ size, name, pic, bgsize, position }) {
  const planetStyle = {
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
      <Tippy
        arrow={false}
        content={
          <div className="planet-tooltip">
            <h1 className="tooltip-title">{name}</h1>

            <img className="raincloud" src={icon} alt="icon" />

            <h2 className="tooltip-degree"> 35° </h2>
          </div>
        }
        placement="bottom"
      >
        <button type="button" className="planet-button" style={planetStyle}>
          {" "}
        </button>
      </Tippy>
    </div>
  );
  return elem;
}

export default Planet;
