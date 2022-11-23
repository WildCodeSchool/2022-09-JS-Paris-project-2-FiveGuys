import React from "react";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import "./SignUpInit.css";

function SignUpInit() {
  return (
    <>
      <Title>Sign up</Title>
      <div className="signUpInit-container">
        <h3>Log in</h3>
        <Link to="connexion">
          <div className="signUpInit-button-container">
            <button type="button">Connexion</button>
          </div>
        </Link>
        <h3>Not yet registered ?</h3>
        <Link to="signup">
          <div className="signUpInit-button-container">
            <button type="button">Sign Up</button>
          </div>
        </Link>
      </div>
    </>
  );
}

export default SignUpInit;
