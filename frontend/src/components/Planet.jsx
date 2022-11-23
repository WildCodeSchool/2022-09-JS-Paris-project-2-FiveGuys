import React from "react";
import "./Planet.css";
import "./PlanetPopover.css";
import { Link } from "react-router-dom";
import PlanetPopover from "./PlanetPopover";

function Planet({ size, name, pic, bgsize, initial, timezone }) {
  const planetStyle = {
    backgroundImage: `url("${pic}")`,
    width: `${size}rem`,
    height: `${size}rem`,
    backgroundSize: `${bgsize}%`,
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const id = open ? "planet-popover" : undefined;

  return (
    <div className="planet-container">
      <Link to={`${name}` === "DeathStar" ? "/error_404" : `planets/${name}`}>
        <div
          className="planet-button"
          style={planetStyle}
          aria-describedby={id}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          aria-haspopup="true"
        />
      </Link>

      <PlanetPopover
        anchorEl={anchorEl}
        name={name}
        initial={initial}
        timezone={timezone}
        open={open}
        handleMouseLeave={() => handleMouseLeave()}
      />
    </div>
  );
}

export default Planet;
