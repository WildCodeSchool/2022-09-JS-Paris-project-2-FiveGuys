import React, { useState } from "react";
import "./Page.css";
import { useParams, Link } from "react-router-dom";
import fetchFunctions from "../services/Fetch";
import "./PlanetCard.css";
import Title from "./Title";
import Calendar from "./Calendar";
import rain from "../../public/static-icons/rain.png";
import wind from "../../public/static-icons/wind.png";
import windDirection from "../../public/static-icons/wind-direction.png";
import sunset from "../../public/static-icons/sunset.png";
import sunrise from "../../public/static-icons/sunrise.png";
import Timezone from "../services/Timezone";
import weatherIcon from "../services/weatherIcon";

function PlanetCard({ planetData, setPlanetData }) {
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
              <div>{Timezone(planetData[planet].timezone)}</div>
            </div>
            <div className="weather-icon">
              <img
                src={weatherIcon(
                  planetData[planet].globalWeather.daily.weathercode[
                    currentDay
                  ],
                  "meteo-icon"
                )}
                alt="sun"
              />
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
                {`${planetData[planet].globalWeather.daily.precipitation_sum[currentDay]}mm`}
              </p>
              <p>
                {`${planetData[planet].globalWeather.daily.winddirection_10m_dominant[currentDay]}°`}
              </p>
              <p>
                {`${planetData[planet].globalWeather.daily.windspeed_10m_max[currentDay]}km/h`}
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

      <div className="planet-card-right">
        <img
          src={new URL(`../style/assets/${planet}.png`, import.meta.url).href}
          alt="planet"
        />
        <p>
          Lorem ipsum dolor sit amet. Ab modi perspiciatis qui nihil nihil quo
          suscipit quasi est pariatur nulla. At culpa nihil qui voluptatibus
          recusandae non tempora praesentium ut accusamus voluptatem. In maxime
          voluptatem nam voluptatibus expedita sed deleniti provident eum
          architecto omnis sit galisum omnis aut odio maiores in tempore
          impedit. Aut similique magnam est quia repudiandae qui{" "}
        </p>
        <Link to={`/planets/${planet}/info`}>
          <button type="button">Would like to know more ?</button>{" "}
        </Link>
      </div>
    </div>
  );
}

export default PlanetCard;
