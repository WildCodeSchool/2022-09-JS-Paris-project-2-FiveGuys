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
        fetchFunctions.fetchResidents(url).then((data) => {
          setFamousPeople((old) => [...old, data]);
        });
      }),
    [people]
  );
  /* console.log(famousPeople); */
  return (
    <div className="planet-info-right-people-pics">
      {famousPeople.slice(0, 2).map((peep) => (
        <figure>
          <img
            className="planet-info-right-people-pic"
            src={weatherIcon(peep.name, "people")}
            alt={peep.name}
          />
          <figcaption> {peep.name}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export default PlanetPeople;
