import React from "react";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import "./AccountInit.css";

function AccountInit({ userInfo, handleLogout, handleDeleteAccount }) {
  return !userInfo ? (
    <p>...loading</p>
  ) : (
    <>
      <Title>Account</Title>
      <h3 id="account-welcome-message">
        {`Hi ${userInfo.info.surname}, may the Force be with you.`}{" "}
      </h3>
      <button type="button" onClick={() => handleLogout()}>
        Log out
      </button>
      <Link to="accountData/">
        <button type="button">Modify account data</button>
      </Link>
      <button type="button" onClick={() => handleDeleteAccount()}>
        Delete account
      </button>
    </>
  );
}

export default AccountInit;
