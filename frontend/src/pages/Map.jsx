import React from "react";
import Planet from "../components/Planet";
import planets from "../services/planetData";
import "../style/StarBackground.css";

function Map({ currentPage, currentPlanet, updatePlanet, reset }) {
  return (
    <div id="map">
      <div>
        {" "}
        <button type="button" onClick={() => updatePlanet("planetToTest")}>
          Planet To Test
        </button>
        <button type="button" onClick={() => reset()}>
          X
        </button>
      </div>
      {currentPage === "news" && (
        <div>
          News{" "}
          <button type="button" onClick={() => reset()}>
            X
          </button>
        </div>
      )}
      {currentPage === "contact" && (
        <div>
          Contact{" "}
          <button type="button" onClick={() => reset()}>
            X
          </button>
        </div>
      )}
      {currentPage === "about" && (
        <div>
          About Us{" "}
          <button type="button" onClick={() => reset()}>
            X
          </button>
        </div>
      )}
      {currentPlanet.name && (
        <div>
          {currentPlanet.name}
          <button type="button" onClick={() => reset()}>
            X
          </button>
        </div>
      )}
      {Object.entries(planets).map(([key, value]) => {
        return (
          <Planet
            key={key}
            pic={value.picture}
            size={value.size}
            name={key}
            bgsize={value.bgsize}
            position={value.position}
          />
        );
      })}
    </div>
  );
}

export default Map;
