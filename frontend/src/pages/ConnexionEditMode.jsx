import React from "react";
import FormTextInputList from "../components/FormTextInputList";

function ConnexionEditMode({
  fieldsToCheck,
  connexionData,
  setConnexionData,
  handleReinitPassword,
  setIsResetMode,
}) {
  return (
    <>
      <FormTextInputList
        fields={[fieldsToCheck[0]]}
        data={connexionData}
        setData={setConnexionData}
        isEditMode={false}
      />
      <button type="button" onClick={() => handleReinitPassword()}>
        Reset password
      </button>
      <button type="button" onClick={() => setIsResetMode(false)}>
        Back to connexion
      </button>
    </>
  );
}

export default ConnexionEditMode;
