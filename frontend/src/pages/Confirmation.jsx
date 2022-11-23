import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Title from "../components/Title";
import "../components/Page.css";
import "./Confirmation.css";

function Confirmation() {
  const navigate = useNavigate();
  const { action } = useParams();

  const confirmationSentence = (param) => {
    switch (param) {
      case "logOut":
        return "Later see you, miss you we will";
      case "updated":
        return "Updated your account is";
      default:
        return "Deleted your account is";
    }
  };

  return (
    <div className="page">
      <Title>{action}</Title>
      <h2>{confirmationSentence(action)}</h2>
      <button type="button" onClick={() => navigate("/account/")}>
        Back to account
      </button>
    </div>
  );
}

export default Confirmation;
