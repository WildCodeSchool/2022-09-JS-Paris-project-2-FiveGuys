import "./App.css";
import "./pages/StarBackground.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import fetchFunctions from "./services/Fetch";
import Map from "./pages/Map";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PlanetCard from "./components/PlanetCard";
import PlanetInfo from "./components/PlanetInfo";
import planets from "./services/planetData";

function App() {
  const [planetData, setPlanetData] = useState(planets);
  const [initial, setInitial] = useState({});

  useEffect(() => {
    Object.entries(planets).forEach(([key, value]) =>
      fetchFunctions.fetchData(value.lat, value.long, true).then((data) => {
        setInitial((old) => ({ ...old, [key]: data.daily }));
      })
    );
  }, []);

  return (
    <div>
      <div className="stars" />
      <div className="twinkling" />
      <div className="others">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="planets/:planet"
              element={
                <PlanetCard
                  planetData={planetData}
                  setPlanetData={setPlanetData}
                />
              }
            />
            <Route path="planets/:planet/info" element={<PlanetInfo />} />
          </Routes>
          <Map initial={initial} />
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
