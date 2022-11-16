import React, { useEffect, useState } from "react";
import fetchFunctions from "../services/Fetch";

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

  return (
    <div className="planet-famous-people">
      {famousPeople.map((peep) => peep.name).slice(0, 3)}
    </div>
  );
}

export default PlanetPeople;
