import React from "react";
import "../style/Page.css";
import { useParams } from "react-router-dom";

function PlanetCard() {
  const { planet } = useParams();
  return <div className="page">{planet}</div>;
}

export default PlanetCard;
