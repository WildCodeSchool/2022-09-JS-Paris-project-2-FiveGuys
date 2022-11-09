import React from "react";
import { useParams } from "react-router-dom";
import fetchFunctions from "../services/Fetch";
import planets from "../services/planetData";

function PlanetInfo() {
  const { planet } = useParams();

  fetchFunctions
    .fetchStarWars(planets[planet].idApi)
    .then((data) => console.warn(data));
  return <div className="page">{planet}</div>;
}

export default PlanetInfo;
