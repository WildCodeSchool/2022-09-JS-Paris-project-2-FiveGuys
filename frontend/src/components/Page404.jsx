import React from "react";
import "./Page404.css";
import Empire from "../../public/flags/Empire.png";
import CrossIcon from "./CrossIcon";

export default function Page404() {
  return (
    <div className="page-container">
      <div className="page">
        <CrossIcon />

        <div className="page-error">
          <h1> 404 ERROR </h1>
          <h2> ACCESS DENIED </h2>
          <h3>
            You are not authorized by the Galactic Empire to access those pieces
            of information.
          </h3>
          {/* <p>Never underestimate the power of the Dark Side</p> */}
          <img src={Empire} alt="Empire Flag" />
        </div>
      </div>
    </div>
  );
}
