import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchFunctions from "../services/Fetch";
import planets from "../services/planetData";
import "./PlanetInfo.css";
import "./PlanetCard.css";
import "./Page.css";
import CrossIcon from "./CrossIcon";
import PlanetInfoLeft from "./PlanetInfoLeft";
import PlanetInfoRight from "./PlanetInfoRight";

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
      <div className="page planet-info">
        <CrossIcon />
        <PlanetInfoLeft planet={planet} planetInfo={planetInfo} />
        <PlanetInfoRight planet={planet} planetInfo={planetInfo} />
      </div>
    </div>
  );
}

export default PlanetInfo;
