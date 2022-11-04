import React /* , { useEffect }  */ from "react";
import "../style/Page.css";
import { useParams } from "react-router-dom";
import fetchData from "../services/Fetch";
import "../style/PlanetCard.css";
import Title from "./Title";
import Calendar from "./Calendar";

function PlanetCard({ planetData, setPlanetData }) {
  const { planet } = useParams();

  if (!planetData[planet].globalWeather) {
    fetchData(planetData[planet].lat, planetData[planet].long).then((data) =>
      setPlanetData({
        ...planetData,
        [planet]: { ...planetData[planet], globalWeather: data },
      })
    );
  }
  return (
    <div className="page planet-card">
      <div className="planet-card-left">
        {" "}
        <Title>{planet}</Title>
        <Calendar days={planetData[planet]} />
      </div>
      <div className="planet-card-right">right</div>
    </div>
  );
}

export default PlanetCard;
