import "./App.css";
import "./pages/StarBackground.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import planets from "./services/planetData";
/* import fetchData from "./services/Fetch"; */
import Map from "./pages/Map";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PlanetCard from "./components/PlanetCard";
import AboutUs from "./components/AboutUs";
import News from "./components/News";
import Contact from "./components/Contact";

function App() {
  const [planetData, setPlanetData] = useState(planets);

  /*   useEffect(() => {
    if (currentPlanet.name) {
      fetchData(currentPlanet.coords).then((data) => console.error(data));
    }
  }, [currentPlanet]);
 */
  return (
    <div>
      <div className="stars" />
      <div className="twinkling" />
      <div className="others">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="aboutUs" element={<AboutUs />} />
            <Route path="news" element={<News />} />
            <Route path="contact" element={<Contact />} />
            <Route
              path="planets/:planet"
              element={
                <PlanetCard
                  planetData={planetData}
                  setPlanetData={setPlanetData}
                />
              }
            />
          </Routes>
          <Map />
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
