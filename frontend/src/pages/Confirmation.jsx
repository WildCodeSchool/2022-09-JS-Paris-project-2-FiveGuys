/* eslint-disable no-nested-ternary */
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Title from "../components/Title";
import "../components/Page.css";
import "./Confirmation.css";
import CrossIcon from "../components/CrossIcon";

function Confirmation() {
  const navigate = useNavigate();
  const { action } = useParams();

  return (
    <div className="page-container logout-page">
      <div className="page logout-content">
        <CrossIcon />
        <Title>{action}</Title>
        <div className="logout-info">
          <h2>
            {action === "logOut"
              ? "Later see you, miss you we will"
              : action === "updated"
              ? "Updated your account is"
              : "Deleted your account is"}{" "}
          </h2>
          <button type="button" onClick={() => navigate("/account/")}>
            Back to account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
