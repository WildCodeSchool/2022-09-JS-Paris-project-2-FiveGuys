import React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import icon from "../style/assets/raincloud.png";
import "./Planet.css";

// import ThemeProvider from "@material-ui/styles";

function Planet({ size, name, pic, bgsize }) {
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

  // const theme = createTheme({
  //   components: {
  //     // Name of the component
  //     MuiPaperRoot: {
  //       styleOverrides: {
  //         // Name of the slot
  //         root: {
  //           // Some CSS
  //           backgroundColor: "blue",
  //         },
  //       },
  //     },
  //   },
  // });

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "planet-popover" : undefined;

  // const classes = useStyles();

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
    <Popover
      backdrop="invisible"
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
  </div>;
}

export default Planet;
