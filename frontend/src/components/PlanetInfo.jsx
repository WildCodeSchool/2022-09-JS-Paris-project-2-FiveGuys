import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchFunctions from "../services/Fetch";
import planets from "../services/planetData";
import "./PlanetInfo.css";
import Title from "./Title";
import weatherIcon from "../services/weatherIcon";
import "./PlanetCard.css";

function PlanetInfo() {
  const { planet } = useParams();
  const [planetInfo, setPlanetInfo] = useState({});
  /* console.log(planets[planet].pictureInfo); */

  useEffect(() => {
    fetchFunctions.fetchStarWars(planets[planet].idApi).then((data) => {
      setPlanetInfo(data);
    });
  }, []);

  return (
    <div className="page planet-info">
      <div className="planet-info-left">
        <Title>{planet}</Title>
        <img
          className="planet-info-pic"
          src={weatherIcon(planets[planet].pictureInfo, "planet-info")}
          alt="planet-info"
        />
        {!planetInfo ? (
          <p>Loading..</p>
        ) : (
          <>
            <div>Population: {planetInfo.population}</div>
            <div>Diameter: {planetInfo.diameter}</div>
            <div>Climate: {planetInfo.climate}</div>
            <div>Orbital period: {planetInfo.orbital_period}</div>
          </>
        )}
      </div>

      <div className="planet-info-right">
        <h3>Famous people</h3>
      </div>
    </div>
  );
}

export default PlanetInfo;
