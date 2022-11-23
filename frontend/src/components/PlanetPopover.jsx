import React from "react";
import { Popover, StyledEngineProvider, Typography } from "@mui/material";
import Weathername from "../services/WeatherName";
import Timezone from "../services/Timezone";
import weatherIcon from "../services/weatherIcon";
import DeathStarPopover from "./DeathStarPopover";

export default function PlanetPopover({
  initial,
  name,
  timezone,
  anchorEl,
  handleMouseLeave,
  open,
}) {
  return (
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
            {name === "DeathStar" ? (
              <DeathStarPopover />
            ) : (
              <>
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
              </>
            )}
          </Typography>
        </div>
      </Popover>
    </StyledEngineProvider>
  );
}
