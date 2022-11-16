import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchFunctions from "../services/Fetch";
import planets from "../services/planetData";
import "./PlanetInfo.css";
import Title from "./Title";
import weatherIcon from "../services/weatherIcon";
import "./PlanetCard.css";
import "./PlanetInfo.css";
import Title from "./Title";
import weatherIcon from "../services/weatherIcon";
import PlanetFlag from "./PlanetFlag";
import PlanetPeople from "./PlanetPeople";

function PlanetInfo() {
  const { planet } = useParams();
  const [planetInfo, setPlanetInfo] = useState({});

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
          <div>Loading..</div>
        ) : (
          <div className="planetInfo-container">
            <div className="planet-detail-info">
              <ul>
                <li className="planet-detail-item">
                  Population: {planetInfo.population}
                </li>
                <li className="planet-detail-item">
                  Diameter: {planetInfo.diameter}
                </li>
                <li className="planet-detail-item">
                  Climate: {planetInfo.climate}
                </li>
                <li className="planet-detail-item">
                  Orbital period: {planetInfo.orbital_period}
                </li>
              </ul>
            </div>
            <PlanetFlag faction={planets[planet].faction} />
          </div>
        )}
      </div>
      <div className="planet-info-right">
        <h3>Famous people</h3>
        {!planetInfo ? (
          <div>Loading..</div>
        ) : (
          <PlanetPeople people={planetInfo.residents} />
        )}
        <h3>Terrain</h3>
        {!planetInfo ? <div>Loading..</div> : <div>{planetInfo.terrain}</div>}
        <h3>Creature</h3>
        {!planetInfo ? (
          <div>Loading..</div>
        ) : (
          <div>{planets[planet].creature}</div>
        )}
      </div>
    </div>
  );
}

export default PlanetInfo;
