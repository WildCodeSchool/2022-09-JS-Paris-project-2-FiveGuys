import React from "react";
import "./AboutUs.css";
import CrossIcon from "../components/CrossIcon";
import Title from "../components/Title";

function AboutUs() {
  const guys = ["Celia", "Cassandra", "Quentin", "Jordann", "Francois"];
  const stories = [
    "I come from Toulouse, a small city on planet Earth in a galaxy far far away. I did international business before discovering that I  was a Jedi. Since then, I specialised in programming with ReactJs,  a light side form of the force. My hobby? Fixing and updating  droids features.",
    "Once a brave and adventurous jedi during numerous battles for the rebels, I am now retired. Putting my powers aside, I help The Alliance by coding new websites and softwares for light sabers and communication to help the citizens navigate through their new Republic.",
    "Former fermented food smuggler within the French Galactic Republic, located in Paris, I decided to change my path to become a web developer, but not for the republic, for the rebellion, in order to establish a code that will allow peace in the galaxy.",
    "Former fermented food smuggler within the French Galactic Republic, located in Paris, I decided to change my path to become a web developer, but not for the republic, for the rebellion, in order to establish a code that will allow peace in the galaxy.",
    "After 10 years working in the mobile game industry, I decided to devote myself to the rebel cause and became a web developper. I started to code my own X-wing, it does not work yet but I assure you that one day it will beat the Accuser or at least one of its engine.",
  ];

  const getImgSrc = (index) => {
    switch (index) {
      case 0:
        return "../../public/crew-photos/celioche.jpg";
      case 1:
        return "../../public/crew-photos/lamenace.jpg";
      case 2:
        return "../../public/crew-photos/couennetine.jpg";
      case 3:
        return "../../public/crew-photos/franssoue.jpg";
      case 4:
        return "../../public/crew-photos/joledeglingo.jpg";
      default:
        return undefined;
    }
  };

  return (
    <div className="page-container aboutUs-container">
      <div className="page aboutUs-global">
        <CrossIcon />
        <div className="aboutUs-title">
          <Title>About Us</Title>
        </div>
        <div className="us-container">
          {guys.map((guy, index) => (
            <div className="fr-person">
              <img src={getImgSrc(index)} alt="profile" />

              <p>{stories[index]}</p>
              <a
                className="linkedin-link"
                href="https://www.linkedin.com/in/celia-rebonato/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="fr-linkedin-button"
                  alt="linkedin"
                  src="../../public/crew-photos/linkedinentier.png"
                />
              </a>
            </div>
          ))}
          {/* <div className="Just-the-five-of-us">
            <img
              id="celioche"
              className="person-picture"
              src="../../public/crew-photos/celioche.jpg"
              alt="Celiochebaloche"
              // width="90%"
            />
            <p>
              I come from Toulouse, a small city on planet Earth in a galaxy far
              far away. I did international business before discovering that I
              was a Jedi. Since then, I specialised in programming with ReactJs,
              a light side form of the force. My hobby? Fixing and updating
              droids features.
            </p>
            <a
              className="linkedin-link"
              href="https://www.linkedin.com/in/celia-rebonato/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="linkedin-button"
                alt="linkedin"
                src="../../public/crew-photos/linkedinentier.png"
                // width="20%"
              />
            </a>
          </div>
          <div className="Just-the-five-of-us">
            <img
              id="quentin"
              className="person-picture"
              src="../../public/crew-photos/couennetine.jpg"
              alt="Couennetine"
              // width="90%"
            />
            <p>
              Former fermented food smuggler within the French Galactic
              Republic, located in Paris, I decided to change my path to become
              a web developer, but not for the republic, for the rebellion, in
              order to establish a code that will allow peace in the galaxy.
            </p>
            <a
              className="linkedin-link"
              href="https://www.linkedin.com/in/quentin-feuvrais/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="linkedin-button"
                alt="linkedin"
                src="../../public/crew-photos/linkedinentier.png"
                // width="20%"
              />
            </a>
          </div>
          <div className="Just-the-five-of-us">
            <img
              className="person-picture"
              src="../../public/crew-photos/lamenace.jpg"
              alt="Couennetine"
              // width="90%"
            />
            <p>
              Once a brave and adventurous jedi during numerous battles for the
              rebels, I am now retired. Putting my powers aside, I help The
              Alliance by coding new websites and softwares to help the citizens
              navigate through their new Republic.
            </p>
            <a
              className="linkedin-link"
              href="https://www.linkedin.com/in/cassandra-juif-152074142/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="linkedin-button"
                alt="linkedin"
                src="../../public/crew-photos/linkedinentier.png"
                // width="20%"
              />
            </a>
          </div>
          <div className="Just-the-five-of-us">
            <img
              className="person-picture"
              src="../../public/crew-photos/franssoue.jpg"
              alt="Couennetine"
              // width="90%"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <a
              className="linkedin-link"
              href="https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAABq5H9QB51urly19mw-eharvpuHakxs82vs&keywords=fran%C3%A7ois%20taillardat&origin=RICH_QUERY_SUGGESTION&position=0&searchId=bdcabada-dffa-4b3b-bd65-43da95bdcd29&sid=0Gc"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="linkedin-button"
                alt="linkedin"
                src="../../public/crew-photos/linkedinentier.png"
                // width="20%"
              />
            </a>
          </div>
          <div className="Just-the-five-of-us">
            <img
              className="person-picture"
              src="../../public/crew-photos/joledeglingo.jpg"
              alt="Couennetine"
              // width="90%"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <a
              className="linkedin-link"
              href="https://www.linkedin.com/in/jordannlegal/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="linkedin-button"
                alt="linkedin"
                src="../../public/crew-photos/linkedinentier.png"
                // width="20%"
              />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
