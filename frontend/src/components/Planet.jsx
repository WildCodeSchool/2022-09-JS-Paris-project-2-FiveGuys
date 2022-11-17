import React from "react";
import "./Planet.css";
import "./Popover.css";
import { Link } from "react-router-dom";
import { Typography, Popover, StyledEngineProvider } from "@mui/material";
import Weathername from "../services/WeatherName";
import Timezone from "../services/Timezone";
import weatherIcon from "../services/weatherIcon";

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
      <StyledEngineProvider injectFirst>
        <Popover
          id="planet-popover"
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
          <div className="popover-container">
            <Typography>
              <h2 className="popover-title"> {name} </h2>
              <div className="popover-hour-time">
                <p className="popover-temp">
                  {initial && `${initial.temperature_2m_max[0]}`}°
                </p>
                <p className="popover-time">{Timezone(timezone)}</p>
              </div>
              <img
                src={
                  initial && weatherIcon(initial.weathercode[0], "meteo-icon")
                }
                alt="popoverPic"
              />
              <p> {Weathername(initial?.weathercode[0])}</p>
            </Typography>
          </div>
        </Popover>
      </StyledEngineProvider>
    </div>
  );
}

export default Planet;
