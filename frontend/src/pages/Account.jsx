/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ConnexionContext from "../contexts/connexionContext";
import Title from "../components/Title";
import FormSubmitter from "../connexionHelpers/formSubmitter";
import { auth } from "../firebase-config";
import FormFields from "../connexionHelpers/formFields";
import FormTextInputList from "../components/FormTextInputList";
import FormHelpers from "../connexionHelpers/formHelpers";
import CrossIcon from "../components/CrossIcon";
import "../components/Page.css";
import "./Account.css";

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
  const [_, ...fieldsToCheck] = Object.values(signInData);

  const handleLogout = async () => {
    await FormSubmitter.logout(userInfo.auth, navigate);
    setUserInfo({ ...userInfo, info: {} });
  };

  const handleDeleteAccount = async () => {
    await FormSubmitter.deleteUser(auth, navigate);
    setUserInfo({ ...userInfo, info: {} });
  };

  useEffect(() => {
    auth.currentUser &&
      FormSubmitter.getUserData(
        userInfo.auth.currentUser.uid,
        userInfo,
        setUserInfo
      );
  }, [auth]);

  return (
    <div div className="page-container account-page">
      <div className="page account-content">
        <CrossIcon />
        {userInfo.info.surname && auth.currentUser ? (
          <>
            <Title>Welcome {userInfo.info?.surname}</Title>
            <h3 className="account-content-h3">May the Force be with you.</h3>
            <div className="account-content-buttons">
              <button
                className="account-content-button"
                type="button"
                onClick={() => handleLogout()}
              >
                Log out
              </button>
              <Link to="accountData/">
                <button className="account-content-button" type="button">
                  Modify account data
                </button>
              </Link>
              <button
                className="account-content-button"
                type="button"
                onClick={() => handleDeleteAccount()}
              >
                Delete account
              </button>
            </div>
          </>
        ) : !userInfo.info.surname && auth.currentUser ? (
          <>
            <Title>Account</Title>
            <h4>LOADING FROM IMPERIAL DATABASE</h4>
          </>
        ) : (
          <>
            <Title>Sign up</Title>
            <div className="account-signup-container">
              <h3>Log in</h3>
              <Link to="connexion">
                <button className="account-content-button" type="button">
                  Connexion
                </button>
              </Link>
              <h3>Not yet registered ?</h3>
              <Link to="signup">
                <button className="account-content-button" type="button">
                  Sign Up
                </button>
              </Link>
            </div>
          </>
        )}
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
    </div>
  );
}

export default Account;
