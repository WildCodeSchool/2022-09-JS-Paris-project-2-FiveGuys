/* eslint-disable no-nested-ternary */
import React, { useContext } from "react";
import FormHelpers from "./formHelpers";
import ConnexionContext from "../contexts/connexionContext";
import "../pages/Connexion.css";

function FormTextInput({ data, setData, field, isEditMode }) {
  const { userInfo } = useContext(ConnexionContext);

  return (
    <div className="formtext-Input-area">
      <div className="label-area">
        <label htmlFor={field.name}>
          <h3>
            {" "}
            {field.label} :{" "}
            {!data[field.name].isRequired && <i>- optional -</i>}
          </h3>
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

        <span className="spanValidation">
          {data[field.name].isValid
            ? "✓"
            : !data[field.name].isValid && data[field.name].value
            ? "✕ "
            : ""}
        </span>
      </div>

      <span className="spanDisplayMsg">
        {data[field.name].touched && data[field.name].displayMsg}
      </span>
    </div>
  );
}

export default FormTextInput;
