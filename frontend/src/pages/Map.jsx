import React from "react";
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
    </div>
  );
}

export default Map;
