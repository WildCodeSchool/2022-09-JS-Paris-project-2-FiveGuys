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
  const fieldsToCheck = Object.values(signInData).slice(1);

  const isFormValid = () => {
    return (
      FormHelpers.allowValidation(fieldsToCheck, signInData.gender) &&
      signInData.password.value === signInData.passwordConfirmation.value &&
      true
    );
  };

  const displayGender = (chosen) => {
    switch (chosen) {
      case !chosen:
        return "Select";
      case 1:
        return "Mr";
      case 2:
        return "Mrs";
      default:
        return undefined;
    }
  };

  return (
    <div className="page-container">
      <div className="page connexion">
        <CrossIcon />
        <Title>Sign up</Title>
        <label htmlFor="civ">Gender * :</label>
        <div className="dropdown">
          {displayGender(signInData.gender)}
          <div className="dropdown-content">
            {["Male", "Female", "Other"].map((gend, index) => (
              <button
                type="button"
                onClick={() =>
                  FormHelpers.assignGender(index + 1, setSignInData, signInData)
                }
              >
                {gend}
              </button>
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
