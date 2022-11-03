import React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import icon from "../style/assets/raincloud.png";
import "../style/Planet.css";
import "@mui/material/styles";

function Planet({ size, name, pic, bgsize /* position */ }) {
  const planetStyle = {
    backgroundImage: `url("${pic}")`,
    width: `${size}rem`,
    height: `${size}rem`,
    backgroundSize: `${bgsize}%`,
  };

  /* const containerPosition = {
    marginTop: `${position.top}%`,
    marginLeft: `${position.left}%`,
  }; */

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "planet-popover" : undefined;

  const elem = (
    <div className="planet-container">
      <button
        type="button"
        className="planet-button"
        style={planetStyle}
        aria-describedby={id}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-haspopup="true"
        backdrop="invisible"
      >
        <Popover
          id={id}
          sx={{
            pointerEvents: "auto",
          }}
          open={open}
          anchorEl={anchorEl}
          onMouseLeave={handleMouseLeave}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          disableRestoreFocus
        >
          {" "}
          <Typography className="planet-popup">
            <h2 className="popup-title">{name}</h2>
            <p className="popup-hour">2:00 am</p>
            <img src={icon} alt="icon" width="50px" />
            <p className="popup-temperature">27°</p>
          </Typography>
        </Popover>
      </button>
    </div>
  );
  return elem;
}

export default Planet;
