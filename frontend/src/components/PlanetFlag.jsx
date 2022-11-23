import React from "react";
import weatherIcon from "../services/weatherIcon";
import "./PlanetInfo.css";

export default function PlanetFlag({ faction }) {
  return (
    <figure>
      <img
        className="planet-info-left-bottom-container-flag"
        src={weatherIcon(faction, "flags")}
        alt={faction}
      />

      <figcaption>
        Authority in place:<p>{faction}</p>
      </figcaption>
    </figure>
  );
}
