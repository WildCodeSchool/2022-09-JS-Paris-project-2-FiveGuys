import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import ConnexionContext from "../contexts/connexionContext";
import FormFields from "../connexionHelpers/formFields";
import FormSubmitter from "../connexionHelpers/formSubmitter";
import "./Connexion.css";
import ConnexionEditMode from "./ConnexionEditMode";
import ConnexionInit from "./ConnexionInit";

function Connexion() {
  const navigate = useNavigate();
  const { userInfo } = useContext(ConnexionContext);
  const { mail, password, connexionError } = FormFields;
  const [isResetMode, setIsResetMode] = useState(false);
  const [connexionData, setConnexionData] = useState({
    connexionError,
    mail,
    password,
  });
  const fieldsToCheck = Object.values(connexionData).slice(1);

  const onFormSubmit = async () => {
    await FormSubmitter.login(
      userInfo.auth,
      connexionData.mail.value,
      connexionData.password.value,
      setConnexionData,
      connexionData,
      navigate
    );
  };

  const handleReinitPassword = () => {
    FormSubmitter.reinitPassWord(
      userInfo.auth,
      connexionData.mail.value,
      navigate
    );
  };

  return (
    <div className="page-container connexion">
      <div className="page connexion">
        <CrossIcon />
        <Title>Connexion</Title>
        {!isResetMode ? (
          <ConnexionInit
            fieldsToCheck={fieldsToCheck}
            connexionData={connexionData}
            setConnexionData={setConnexionData}
            onFormSubmit={onFormSubmit}
            setIsResetMode={setIsResetMode}
          />
        ) : (
          <ConnexionEditMode
            fieldsToCheck={fieldsToCheck}
            connexionData={connexionData}
            setConnexionData={setConnexionData}
            onFormSubmit={onFormSubmit}
            setIsResetMode={setIsResetMode}
            handleReinitPassword={handleReinitPassword}
          />
        )}

        <button
          className="connexion-form-button"
          type="button"
          onClick={() => navigate("/account/")}
        >
          Back to account
        </button>
      </div>
    </div>
  );
}

export default Connexion;
