import React from "react";
import "./Page404.css";

export default function Page404() {
  return (
    <div className="page-container">
      <div className="page page-error">
        <h1> 404 ERROR </h1>
        <h2> Page not found </h2>
        <h3>
          You are not authorized by the Galactic Empire to access those pieces
          of information
        </h3>
        <p>Do not underestimate the power of the Dark Side</p>
      </div>
    </div>
  );
}
