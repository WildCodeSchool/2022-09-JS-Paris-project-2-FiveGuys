import React from "react";
import Planet from "../components/Planet";
import planets from "../services/planetData";
import "../style/StarBackground.css";
import "../style/map.css";

function Map() {
  return (
    <div id="map">
      {Object.entries(planets).map(([key, value]) => {
        return (
          <Planet
            key={key}
            pic={value.picture}
            size={value.size * 1.5}
            /* name={key} */
            bgsize={value.bgsize}
            position={value.position}
          />
        );
      })}
    </div>
  );
}

export default Map;
