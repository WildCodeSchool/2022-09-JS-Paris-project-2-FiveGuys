import React from "react";
import { Link } from "react-router-dom";
import Title from "../components/Title";

function SignUpInit() {
  return (
    <>
      <Title>Sign up</Title>
      <h3>Log in</h3>
      <Link to="connexion">
        <button type="button">Connexion</button>
      </Link>
      <h3>Not yet registered ?</h3>
      <Link to="signup">
        <button type="button">Sign Up</button>
      </Link>
    </>
  );
}

export default SignUpInit;
