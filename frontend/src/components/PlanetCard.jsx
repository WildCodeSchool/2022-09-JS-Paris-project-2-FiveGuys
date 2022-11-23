import React, { useState } from "react";
import PlanetCardLeft from "./PlanetCardLeft";
import PlanetCardRight from "./PlanetCardRight";
import planets from "../services/planetData";
import "./PlanetCard.css";
import CrossIcon from "./CrossIcon";
import "./Page.css";

function PlanetCard() {
  const [planetData, setPlanetData] = useState(planets);
  return (
    <div>
      <div className="page-container">
        <div className="page page-planet-card">
          <CrossIcon />

          <PlanetCardLeft
            planetData={planetData}
            setPlanetData={setPlanetData}
          />
          <PlanetCardRight />
        </div>
      </div>
    </div>
  );
}

export default PlanetCard;
