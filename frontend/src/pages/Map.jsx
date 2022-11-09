import React from "react";
import Planet from "../components/Planet";
import planets from "../services/planetData";
import "./StarBackground.css";
import "./Map.css";

function Map({ initial }) {
  return (
    <div id="map">
      {Object.entries(planets).map(([key, value]) => {
        return (
          <Planet
            initial={initial[key]}
            key={key}
            pic={value.picture}
            size={value.size * 1.5}
            name={key}
            bgsize={value.bgsize}
            timezone={value.timezone}
          />
        );
      })}
    </div>
  );
}

export default Map;
