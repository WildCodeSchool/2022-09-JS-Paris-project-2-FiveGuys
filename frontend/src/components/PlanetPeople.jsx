import React, { useEffect, useState } from "react";
import fetchFunctions from "../services/Fetch";
import weatherIcon from "../services/weatherIcon";
import "./PlanetInfo.css";

function PlanetPeople({ people }) {
  const [famousPeople, setFamousPeople] = useState([]);

  useEffect(
    () =>
      people &&
      people.forEach((url) => {
        fetchFunctions
          .fetchResidents(url)
          .then((data) => setFamousPeople((old) => [...old, data]));
      }),
    [people]
  );
  /* console.log(famousPeople); */
  return (
    <div className="planet-famous-people">
      {famousPeople.slice(0, 2).map((peep) => (
        <>
          <div> {peep.name}</div>
          <img
            className="planet-people-pic"
            src={weatherIcon(peep.name, "people")}
            alt={peep.name}
          />
        </>
      ))}
    </div>
  );
}

export default PlanetPeople;
