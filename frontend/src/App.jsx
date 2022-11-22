import "./App.css";
import "./pages/StarBackground.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ConnexionContextProvider } from "./contexts/connexionContext";
import fetchFunctions from "./services/Fetch";
import Map from "./pages/Map";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PlanetInfo from "./components/PlanetInfo";
import planets from "./services/planetData";
import PlanetCard from "./components/PlanetCard";
import AboutUs from "./components/AboutUs";
import Credit from "./components/Credit";
import Page404 from "./components/Page404";
import SignIn from "./pages/SignIn";
import Confirmation from "./pages/Confirmation";
import Connexion from "./pages/Connexion";
import Account from "./pages/Account";
import Comments from "./pages/Comments";

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
    <div className="total">
      <div className="stars" />
      <div className="twinkling" />
      <div className="others">
        <BrowserRouter>
          <ConnexionContextProvider>
            <Header />
            <Routes>
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="/credits" element={<Credit />} />
              <Route path="planets/:planet" element={<PlanetCard />} />
              <Route path="planets/:planet/comments" element={<Comments />} />
              <Route path="account/connexion" element={<Connexion />} />
              <Route path="account/signIn" element={<SignIn />} />
              <Route
                path="account/confirmation/:action"
                element={<Confirmation />}
              />
              <Route path="account/*" element={<Account />} />
              <Route path="planets/:planet/info" element={<PlanetInfo />} />
              <Route path="/error_404" element={<Page404 />} />
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
