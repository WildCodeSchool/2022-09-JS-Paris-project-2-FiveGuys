const FormHelpers = {
  handleBlur: (event, data, setData, isEditMode) => {
    const fieldName = event.target.name;
    const newField = { ...data[fieldName] };
    newField.touched = true;
    if (data[fieldName].isRequired) {
      if (!data[fieldName].value.length) {
        newField.displayMsg = !isEditMode && "This field is required";
      } else if (data[fieldName].isValid) {
        newField.displayMsg = false;
      } else {
        newField.displayMsg = newField.errorMsg;
      }
    } else if (!data[fieldName].isRequired) {
      if (
        !data[fieldName].isRequired &&
        data[fieldName].value &&
        !data[fieldName].isValid
      ) {
        newField.displayMsg = newField.errorMsg;
      }
    }
    setData({ ...data, [fieldName]: newField });
  },
  handleChange: (event, data, setData, isEditMode) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const newField = { ...data[fieldName] };
    newField.value = fieldValue;
    if (data[fieldName].regexToTest.test(fieldValue)) {
      newField.isValid = true;
      newField.displayMsg = false;
    } else {
      newField.isValid = false;
      if (!newField.value && newField.isRequired) {
        newField.displayMsg = !isEditMode && "This field is required";
      } else if (newField.value) {
        newField.displayMsg = newField.errorMsg;
      } else {
        newField.displayMsg = false;
      }
    }
    setData({ ...data, [fieldName]: newField });
  },
  checkRequired: (fieldsToCheck) =>
    fieldsToCheck.filter((key) => key.isRequired).every((val) => val.isValid),
  checkNotRequired: (fieldsToCheck) =>
    fieldsToCheck
      .filter((key) => !key.isRequired)
      .every((val) => !val.value || (val.value && val.isValid)),

  allowValidation: (fieldsToCheck, gender) => {
    return (
      FormHelpers.checkRequired(fieldsToCheck) &&
      FormHelpers.checkNotRequired(fieldsToCheck) &&
      gender &&
      true
    );
  },
  getModifiedFields: (fields) => {
    return fields.filter((field) => field.touched && field.value);
  },
  allowModifications: (fields, info) => {
    return FormHelpers.getModifiedFields(fields).every(
      (field) => field.isValid || field.value === info[field.name]
    );
  },
  handleExistingEmail: (email, data, setData) => {
    const newField = { ...data.mail };
    newField.isValid = false;
    newField.displayMsg = `${email} : this email belongs to an existing account`;
    setData({ ...data, mail: newField });
  },
  assignGender: (gender, setData, data) => {
    setData({ ...data, gender });
  },
};

export default FormHelpers;
