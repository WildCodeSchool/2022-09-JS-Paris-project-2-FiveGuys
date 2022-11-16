import React, { useState } from "react";
import { useParams } from "react-router-dom";
import fetchFunctions from "../services/Fetch";
import "./Page.css";
import "./PlanetCard.css";
import Title from "./Title";
import Calendar from "./Calendar";
import Weathername from "../services/WeatherName";
import rain from "../../public/static-icons/rain.png";
import wind from "../../public/static-icons/wind.png";
import windDirection from "../../public/static-icons/wind-direction.png";
import sunset from "../../public/static-icons/sunset.png";
import sunrise from "../../public/static-icons/sunrise.png";
import Timezone from "../services/Timezone";
import weatherIcon from "../services/weatherIcon";

function PlanetCardLeft({ planetData, setPlanetData }) {
  const [currentDay, setCurrentDay] = useState(0);
  const { planet } = useParams();

  if (!planetData[planet].globalWeather) {
    fetchFunctions
      .fetchData(planetData[planet].lat, planetData[planet].long, false)
      .then((data) => {
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
    <div className="planet-card-left">
      <Title>{planet}</Title>
      <div className="calendar-container">
        <Calendar
          days={planetData[planet]}
          currentDay={currentDay}
          setCurrentDay={setCurrentDay}
        />
      </div>
      {planetData[planet].globalWeather && (
        <>
          <div className="temperature-and-hour">
            <div>
              {`${planetData[planet].globalWeather.daily.temperature_2m_max[currentDay]}°`}
            </div>
            <div>{Timezone(planetData[planet].timezone)}</div>
          </div>
          <div className="weather-icon">
            <img
              src={weatherIcon(
                planetData[planet].globalWeather.daily.weathercode[currentDay],
                "meteo-icon"
              )}
              alt="sun"
            />
          </div>
          <div className="weatherName">
            <p>
              {Weathername(
                planetData[planet].globalWeather.daily.weathercode[currentDay]
              )}
            </p>
          </div>
          <div className="weather-spec-icon">
            <img src={rain} alt="rain" />
            <img src={windDirection} alt="Wind Direction" />
            <img src={wind} alt="wind" />
            <img src={sunrise} alt="sunrise" />
            <img src={sunset} alt="sunset" />
          </div>
          <div className="weather-spec-data">
            <p>
              {
                planetData[planet].globalWeather.daily.precipitation_sum[
                  currentDay
                ]
              }
              mm
            </p>
            <p>
              {
                planetData[planet].globalWeather.daily
                  .winddirection_10m_dominant[currentDay]
              }
              °
            </p>
            <p>
              {
                planetData[planet].globalWeather.daily.windspeed_10m_max[
                  currentDay
                ]
              }
              km/h
            </p>
            <p>
              {`${planetData[planet].globalWeather.daily.sunrise[currentDay]}`.slice(
                -5
              )}
            </p>
            <p>
              {`${planetData[planet].globalWeather.daily.sunset[currentDay]}`.slice(
                -5
              )}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default PlanetCardLeft;
