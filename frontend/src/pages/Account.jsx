import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ConnexionContext from "../contexts/connexionContext";
import FormSubmitter from "../connexionHelpers/formSubmitter";
import { auth } from "../firebase-config";
import FormFields from "../connexionHelpers/formFields";
import FormTextInputList from "../components/FormTextInputList";
import FormHelpers from "../connexionHelpers/formHelpers";
import AccountHOC from "./AccountHOC";

function Account() {
  const navigate = useNavigate();
  const params = useParams();
  const { userInfo, setUserInfo } = useContext(ConnexionContext);
  const { gender, name, surname, phone, birth } = FormFields;
  const [signInData, setSignInData] = useState({
    gender,
    name,
    surname,
    phone,
    birth,
  });
  const fieldsToCheck = Object.values(signInData).slice(1);

  const handleLogout = async () => {
    await FormSubmitter.logout(userInfo.auth, navigate);
    setUserInfo({ ...userInfo, info: {} });
  };

  const handleDeleteAccount = async () => {
    await FormSubmitter.deleteUser(auth, navigate);
    setUserInfo({ ...userInfo, info: {} });
  };

  useEffect(() => {
    if (auth.currentUser)
      FormSubmitter.getUserData(
        userInfo.auth.currentUser.uid,
        userInfo,
        setUserInfo
      );
  }, [auth]);

  return (
    <div className="page">
      <AccountHOC
        userInfo={userInfo}
        auth={auth}
        handleLogout={handleLogout}
        handleDeleteAccount={handleDeleteAccount}
      />
      {params["*"] === "accountData/" && (
        <>
          <FormTextInputList
            fields={fieldsToCheck}
            data={signInData}
            setData={setSignInData}
            isEditMode
          />
          <button
            disabled={
              !FormHelpers.allowModifications(fieldsToCheck, userInfo.info)
            }
            type="button"
            onClick={() =>
              FormSubmitter.updateUserData(
                auth.currentUser.uid,
                FormHelpers.getModifiedFields(fieldsToCheck),
                navigate
              )
            }
          >
            Save changes
          </button>
          <button type="button" onClick={() => navigate("/account")}>
            Cancel
          </button>
        </>
      )}
    </div>
  );
}

export default Account;
