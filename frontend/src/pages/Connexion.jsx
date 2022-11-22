/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import ConnexionContext from "../contexts/connexionContext";
import FormFields from "../connexionHelpers/formFields";
import FormSubmitter from "../connexionHelpers/formSubmitter";
import FormHelpers from "../connexionHelpers/formHelpers";
import FormTextInputList from "../components/FormTextInputList";
import "./Connexion.css";
import "../components/Page.css";
import CrossIcon from "../components/CrossIcon";

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
  const [_, ...fieldsToCheck] = Object.values(connexionData);

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
          <div className="connexion-form-text-input">
            <FormTextInputList
              fields={fieldsToCheck}
              data={connexionData}
              setData={setConnexionData}
              isEditMode={false}
            />
            {/* <i id="required">* required</i> */}

            <div className="spanDisplayMsg-area">
              <span className="spanDisplayMsg">
                {connexionData.connexionError}
              </span>
            </div>
            <div className="connexion-form-buttons-container">
              <button
                className="connexion-form-button"
                type="button"
                onClick={() =>
                  FormHelpers.allowValidation(fieldsToCheck, true) &&
                  onFormSubmit()
                }
              >
                Log in
              </button>

              <i className="password-forgotten">Password Forgotten ?</i>

              <button
                className="connexion-form-button"
                type="button"
                onClick={() => setIsResetMode(true)}
              >
                Reset password
              </button>
            </div>
          </div>
        ) : (
          <>
            <FormTextInputList
              fields={[fieldsToCheck[0]]}
              data={connexionData}
              setData={setConnexionData}
              isEditMode={false}
            />

            <button
              className="connexion-form-button"
              type="button"
              onClick={() => handleReinitPassword()}
            >
              Reset password
            </button>
            <button
              className="connexion-form-button"
              type="button"
              onClick={() => setIsResetMode(false)}
            >
              Back to connexion
            </button>
          </>
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
