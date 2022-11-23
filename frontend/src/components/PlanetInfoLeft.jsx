import React from "react";
import planets from "../services/planetData";
import "./PlanetInfo.css";
import "./PlanetCard.css";
import "./Page.css";
import Title from "./Title";
import weatherIcon from "../services/weatherIcon";
import PlanetFlag from "./PlanetFlag";

export default function PlanetInfoLeft({ planet, planetInfo }) {
  return (
    <div className="planet-info-left">
      <Title>{planet}</Title>
      <img
        className="planet-info-left-pic"
        src={weatherIcon(planets[planet].pictureInfo, "planet-info-pic")}
        alt="planet-info-pic"
      />
      {!planetInfo ? (
        <div>Loading..</div>
      ) : (
        <div className="planet-info-left-bottom-container">
          <div className="planet-info-left-bottom-container-info">
            <ul>
              <li className="planet-info-left-bottom-container-item">
                Population: {planetInfo.population} people
              </li>
              <li className="planet-info-left-bottom-container-item">
                Diameter: {planetInfo.diameter} km²
              </li>
              <li className="planet-info-left-bottom-container-item">
                Climate: {planetInfo.climate}
              </li>
              <li className="planet-info-left-bottom-container-item">
                Orbital period: {planetInfo.orbital_period} days
              </li>
            </ul>
          </div>
          <PlanetFlag faction={planets[planet].faction} />
        </div>
      )}
    </div>
  );
}
