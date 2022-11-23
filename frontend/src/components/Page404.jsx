import React from "react";
import "./Page.css";
import "./Page404.css";
import Empire from "../../public/flags/Empire.png";
import CrossIcon from "./CrossIcon";

export default function Page404() {
  return (
    <div className="page-container">
      <div className="page error-page">
        <CrossIcon />

        <div className="page-error-content">
          <h1> 404 ERROR </h1>
          <h2> ACCESS DENIED </h2>
          <h3>
            You are not authorized by the Galactic Empire to access those pieces
            of information.
          </h3>
          <img src={Empire} alt="Empire Flag" />
        </div>
      </div>
    </div>
  );
}
