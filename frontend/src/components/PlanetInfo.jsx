import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchFunctions from "../services/Fetch";
import planets from "../services/planetData";
import "./PlanetInfo.css";
import "./PlanetCard.css";
import "./Page.css";
import Title from "./Title";
import weatherIcon from "../services/weatherIcon";
import PlanetFlag from "./PlanetFlag";
import PlanetPeople from "./PlanetPeople";
import CrossIcon from "./CrossIcon";

function PlanetInfo() {
  const { planet } = useParams();
  const [planetInfo, setPlanetInfo] = useState({});

  useEffect(() => {
    fetchFunctions.fetchStarWars(planets[planet].idApi).then((data) => {
      setPlanetInfo(data);
    });
  }, []);

  return (
    <div className="page-container">
      <div className="page">
        <CrossIcon />
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
        <div className="planet-info-right">
          <div className="planet-info-right-people-container">
            <h3 className="planet-info-right-people-title">Famous people</h3>
            {!planetInfo ? (
              <div>Loading..</div>
            ) : (
              <PlanetPeople people={planetInfo.residents} />
            )}
          </div>
          <div className="planet-info-right-creatures-container">
            <h3 className="planet-info-right-creatures-title">Creatures</h3>
            {!planetInfo ? (
              <div>Loading..</div>
            ) : (
              <div className="planet-info-right-creatures-pics">
                {planets[planet].creature.map((creat) => (
                  <figure>
                    <img
                      className="planet-info-right-creatures-pic"
                      src={weatherIcon(creat, "creatures")}
                      alt={creat}
                    />
                    <figcaption>{creat}</figcaption>
                  </figure>
                ))}
              </div>
            )}
          </div>
          <div className="planet-info-right-terrains-container">
            <h3 className="planet-info-right-terrains-title">Terrains</h3>

            {!planetInfo ? (
              <div>Loading..</div>
            ) : (
              <div className="planet-info-right-terrains-pics">
                {planetInfo.terrain
                  ?.split(", ")
                  .slice(0, 2)
                  .map((terr) => (
                    <figure>
                      <img
                        className="planet-info-right-terrains-pic"
                        src={weatherIcon(terr, "terrains")}
                        alt={terr}
                      />
                      <figcaption>{terr}</figcaption>
                    </figure>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanetInfo;
