import React from "react";
import planets from "../services/planetData";
import "./PlanetInfo.css";
import "./PlanetCard.css";
import "./Page.css";
import weatherIcon from "../services/weatherIcon";
import PlanetPeople from "./PlanetPeople";

export default function PlanetInfoRight({ planet, planetInfo }) {
  return (
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
  );
}
