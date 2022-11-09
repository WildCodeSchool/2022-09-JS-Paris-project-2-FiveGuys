import React from "react";
import "./Planet.css";
import "./Popover.css";
import { Link } from "react-router-dom";
import { Typography, Popover, StyledEngineProvider } from "@mui/material";

function Planet({ size, name, pic, bgsize }) {
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
      <Link to={`planets/${name}`}>
        <div
          className="planet-button"
          style={planetStyle}
          aria-describedby={id}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          aria-haspopup="true"
        />
      </Link>
      <StyledEngineProvider injectFirst>
        <Popover
          id={id}
          sx={{
            pointerEvents: "none",
          }}
          open={open}
          anchorEl={anchorEl}
          onClose={handleMouseLeave}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          disableRestoreFocus
        >
          {" "}
          <div className="popover-container">
            <Typography>
              <h2 className="popover-title"> {name} </h2>
              <div className="popover-hour-time">
                <p className="popover-temp"> 27° </p>
                <p className="popover-time"> 14h00 </p>
              </div>
              {/*  <img
                className="popover-icon"
                src={icon}
                alt="icon"
                width="60px"
              /> */}
            </Typography>
          </div>
        </Popover>
      </StyledEngineProvider>
    </div>
  );
}

export default Planet;
