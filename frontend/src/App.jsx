import "./App.css";
import "./pages/StarBackground.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import fetchFunctions from "./services/Fetch";
import Map from "./pages/Map";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PlanetInfo from "./components/PlanetInfo";
import planets from "./services/planetData";
import PlanetCard from "./components/PlanetCard";
import Page404 from "./components/Page404";
import { ConnexionContextProvider } from "./contexts/connexionContext";
import SignUp from "./pages/SignUp";
import Confirmation from "./pages/Confirmation";
import Connexion from "./pages/Connexion";
import Account from "./pages/Account";
import Comments from "./pages/Comments";
import AboutUs from "./pages/AboutUs";
import Credit from "./pages/Credit";

function App() {
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
          <ConnexionContextProvider>
            <Header />
            <Routes>
              <Route path="planets/:planet" element={<PlanetCard />} />
              <Route path="planets/:planet/comments" element={<Comments />} />
              <Route path="account/connexion" element={<Connexion />} />
              <Route path="account/signup" element={<SignUp />} />
              <Route
                path="account/confirmation/:action"
                element={<Confirmation />}
              />
              <Route path="account/*" element={<Account />} />
              <Route path="planets/:planet/info" element={<PlanetInfo />} />
              <Route path="/error_404" element={<Page404 />} />
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="/credits" element={<Credit />} />
            </Routes>
            <Map initial={initial} />
            <Footer />
          </ConnexionContextProvider>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
