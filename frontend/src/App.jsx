import "./style/App.css";
import "./style/StarBackground.css";
import React, { useState, useEffect } from "react";
import planets from "./services/planetData";
import fetchData from "./services/Fetch";
import Map from "./pages/Map";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState("");
  const [currentPlanet, setCurrentPlanet] = useState({
    name: "",
    coords: {
      lat: 0,
      long: 0,
    },
  });
  const handleMenuItem = (item) => {
    setCurrentPlanet("");
    setCurrentPage(item);
  };
  const updatePlanet = (planet) => {
    setCurrentPage("");
    setCurrentPlanet({
      name: planet,
      coords: {
        lat: planets[planet].lat,
        long: planets[planet].long,
      },
    });
  };

  const reset = () => {
    setCurrentPage("");
    setCurrentPlanet("");
  };

  useEffect(() => {
    if (currentPlanet.name) {
      fetchData(currentPlanet.coords).then((data) => console.error(data));
    }
  }, [currentPlanet.name]);

  return (
    <div>
      <div className="stars" />
      <div className="twinkling" />
      <div className="others">
        <Header currentPage={currentPage} handleMenuItem={handleMenuItem} />
        <Map
          currentPlanet={currentPlanet}
          currentPage={currentPage}
          updatePlanet={updatePlanet}
          handleMenuItem={handleMenuItem}
          reset={reset}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
