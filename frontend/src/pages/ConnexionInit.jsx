import React from "react";
import FormTextInputList from "../components/FormTextInputList";
import FormHelpers from "../connexionHelpers/formHelpers";

function ConnexionInit({
  fieldsToCheck,
  connexionData,
  setConnexionData,
  onFormSubmit,
  setIsResetMode,
}) {
  return (
    <>
      <FormTextInputList
        fields={fieldsToCheck}
        data={connexionData}
        setData={setConnexionData}
        isEditMode={false}
      />
      <i id="required">* required</i>
      <div className="spanDisplayMsg-area">
        <span className="spanDisplayMsg">{connexionData.connexionError}</span>
      </div>
      <button
        type="button"
        onClick={() =>
          FormHelpers.allowValidation(fieldsToCheck, true) && onFormSubmit()
        }
      >
        Log in
      </button>
      <i className="password-forgotten">Password forgotten ?</i>
      <button type="button" onClick={() => setIsResetMode(true)}>
        Reset password
      </button>
    </>
  );
}

export default ConnexionInit;
