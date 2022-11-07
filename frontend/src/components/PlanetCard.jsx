import React, { useState } from "react";
import "./Page.css";
import { useParams } from "react-router-dom";
import fetchData from "../services/Fetch";
import "./PlanetCard.css";
import Title from "./Title";
import Calendar from "./Calendar";
import rain from "../style/assets/rain.png";
import windDirection from "../style/assets/wind-direction.png";
import wind from "../style/assets/wind.png";
import uv from "../style/assets/uv.png";

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
                {`${planetData[planet].globalWeather.daily.temperature_2m_max[currentDay]}°`}
              </div>
              <div>
                {current.getHours() + planetData[planet].timezone}H
                {current.getMinutes().toString().padStart(2, "0")}
              </div>
            </div>
            <div className="weather-icon">
              <img
                src={
                  new URL(
                    `../../public/meteo-icon/${planetData[planet].globalWeather.daily.weathercode[currentDay]}.png`,
                    import.meta.url
                  ).href
                }
                alt="sun"
              />
            </div>
            <div className="weather-spec-icon">
              <img src={rain} alt="rain" />
              <img src={windDirection} alt="Wind Direction" />
              <img src={wind} alt="wind" />
              <img src={uv} alt="UV" />
            </div>
            <div className="weather-spec-data">
              <p>
                {`${planetData[planet].globalWeather.daily.precipitation_sum[currentDay]}mm`}
              </p>
              <p>
                {`${planetData[planet].globalWeather.daily.winddirection_10m_dominant[currentDay]}°`}
              </p>
              <p>
                {`${planetData[planet].globalWeather.daily.windspeed_10m_max[currentDay]}km/h`}
              </p>
              <p>2/10</p>
            </div>
          </>
        )}
      </div>

      <div className="planet-card-right">right</div>
    </div>
  );
}

export default PlanetCard;
