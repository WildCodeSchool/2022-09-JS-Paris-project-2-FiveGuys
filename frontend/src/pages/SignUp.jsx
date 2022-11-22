/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import ConnexionContext from "../contexts/connexionContext";
import FormHelpers from "../connexionHelpers/formHelpers";
import FormFields from "../connexionHelpers/formFields";
import FormTextInputList from "../components/FormTextInputList";
import FormSubmitter from "../connexionHelpers/formSubmitter";
import CrossIcon from "../components/CrossIcon";
import "../components/Page.css";
import "./SignUp.css";

function SignIn() {
  const { userInfo } = useContext(ConnexionContext);
  const navigate = useNavigate();
  const {
    gender,
    mail,
    password,
    name,
    surname,
    phone,
    birth,
    passwordConfirmation,
  } = FormFields;
  const [signInData, setSignInData] = useState({
    gender,
    name,
    surname,
    mail,
    phone,
    birth,
    password,
    passwordConfirmation,
  });
  const [_, ...fieldsToCheck] = Object.values(signInData);

  const isFormValid = () => {
    if (
      FormHelpers.allowValidation(fieldsToCheck, signInData.gender) &&
      signInData.password.value === signInData.passwordConfirmation.value
    ) {
      return true;
    }
  };

  return (
    <div className="page-container">
      <div className="page connexion">
        <CrossIcon />
        <Title>Sign up</Title>

        <label htmlFor="civ">Gender * :</label>
        <br />
        <div className="dropdown">
          {!signInData.gender
            ? "Select : "
            : signInData.gender === 1
            ? "Mr"
            : signInData.gender === 2
            ? "Mrs"
            : ""}
          <div className="dropdown-content">
            {["Male", "Female", "Other"].map((gend, index) => (
              <p
                onClick={(e) =>
                  FormHelpers.assignGender(index + 1, setSignInData, signInData)
                }
              >
                {gend}
              </p>
            ))}
          </div>
        </div>

        <FormTextInputList
          fields={fieldsToCheck}
          data={signInData}
          setData={setSignInData}
          isEditMode={false}
        />
        <i>* required</i>
        <br />
        <button
          type="button"
          onClick={() =>
            isFormValid() &&
            FormSubmitter.register(
              userInfo.auth,
              signInData.mail.value,
              signInData.password.value,
              setSignInData,
              signInData,
              navigate
            )
          }
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default SignIn;
