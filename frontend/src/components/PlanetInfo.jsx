import fetchFunctions from "@services/Fetch";
import React from "react";
/* import fetchFunctions from "../services/Fetch"; */
import { useParams } from "react-router-dom";
import planets from "../services/planetData";

function PlanetInfo() {
  const { planet } = useParams();
  /* console.log(planets[planet].idApi); */

  fetchFunctions
    .fetchStarWars(planets[planet].idApi)
    .then((data) => console.log(data));
  return <div className="page">{planet}</div>;
}

export default PlanetInfo;

/* {
  `${planetData[planet].globalWeather.daily.temperature_2m_max[currentDay]}°`;
}
 */
