import React, { useContext } from "react";
import FormHelpers from "./formHelpers";
import ConnexionContext from "../contexts/connexionContext";
import "../pages/Connexion.css";

function FormTextInput({ data, setData, field, isEditMode }) {
  const { userInfo } = useContext(ConnexionContext);

  const displayValidation = () => {
    switch (true) {
      case data[field.name].isValid:
        return " ✓";
      case !data[field.name].isValid && data[field.name].value:
        return " ✕";
      default:
        return undefined;
    }
  };

  return (
    <div className="formtext-Input-area">
      <div className="label-area">
        <label htmlFor={field.name}>
          {field.label} : {!data[field.name].isRequired && <i>- optional -</i>}
        </label>
        <input
          placeholder={isEditMode ? userInfo.info[field.name] : ""}
          id={field.name}
          type="text"
          name={field.name}
          onFocus={(e) => FormHelpers.handleBlur(e, data, setData, isEditMode)}
          onChange={(e) =>
            FormHelpers.handleChange(e, data, setData, isEditMode)
          }
        />

        <span className="spanValidation">{displayValidation()}</span>
      </div>
      <span className="spanDisplayMsg">
        {data[field.name].touched && data[field.name].displayMsg}
      </span>
    </div>
  );
}

export default FormTextInput;
