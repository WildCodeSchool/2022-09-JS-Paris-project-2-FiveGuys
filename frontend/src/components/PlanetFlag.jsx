import React from "react";
import weatherIcon from "../services/weatherIcon";
import "./PlanetInfo.css";

export default function PlanetFlag({ faction }) {
  return (
    <img className="Flags" src={weatherIcon(faction, "flags")} alt={faction} />
  );
}
