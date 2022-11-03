import "./style/App.css";
import "./style/StarBackground.css";
import React, { useState } from "react";
/* import planets from "./services/planetData";
import fetchData from "./services/Fetch"; */
import { Route, Routes } from "react-router-dom";
import Map from "./pages/Map";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PlanetCard from "./components/PlanetCard";
import AboutUs from "./components/AboutUs";
import News from "./components/News";
import Contact from "./components/Contact";

function App() {
  const [currentPlanet, setCurrentPlanet] = useState(false);
  console.warn(setCurrentPlanet);

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
        <Header />
        <Routes>
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="news" element={<News />} />
          <Route path="contact" element={<Contact />} />
          <Route path="planets/:planet" element={<PlanetCard />} />
        </Routes>
        <Map currentPlanet={currentPlanet} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
