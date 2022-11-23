import React from "react";
import FormTextInput from "../connexionHelpers/formTextInput";

function FormTextInputList({ fields, data, setData, isEditMode }) {
  return (
    <>
      {fields.map((field) => (
        <FormTextInput
          key={field.name}
          field={field}
          data={data}
          setData={setData}
          isEditMode={isEditMode}
        />
      ))}
    </>
  );
}

export default FormTextInputList;
