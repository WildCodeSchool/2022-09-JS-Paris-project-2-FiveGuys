import React, { useState } from "react";
import "./Page.css";
import { useParams } from "react-router-dom";
import fetchData from "../services/Fetch";
import "./PlanetCard.css";
import Title from "./Title";
import Calendar from "./Calendar";
import sun from "../style/assets/0.png";

function PlanetCard({ planetData, setPlanetData }) {
  const current = new Date();
  const [currentDay, setCurrentDay] = useState(0);
  const { planet } = useParams();

  if (!planetData[planet].globalWeather) {
    fetchData(planetData[planet].lat, planetData[planet].long).then((data) => {
      setPlanetData({
        ...planetData,
        [planet]: {
          ...planetData[planet],
          globalWeather: data,
        },
      });
    });
  }
  return (
    <div className="page planet-card">
      <div className="planet-card-left">
        <Title>{planet}</Title>
        <Calendar
          days={planetData[planet]}
          currentDay={currentDay}
          setCurrentDay={setCurrentDay}
        />

        {planetData[planet].globalWeather && (
          <>
            <div className="temperature-and-hour">
              <div>
                {
                  planetData[planet].globalWeather.daily.temperature_2m_max[
                    currentDay
                  ]
                }
              </div>
              <div>
                {current.getHours() + planetData[planet].timezone}H
                {current.getMinutes().toString().padStart(2, "0")}
              </div>
            </div>
            <div className="weather-icon">
              <img src={sun} alt="sun" />
            </div>
          </>
        )}
      </div>

      <div className="planet-card-right">right</div>
    </div>
  );
}

export default PlanetCard;
