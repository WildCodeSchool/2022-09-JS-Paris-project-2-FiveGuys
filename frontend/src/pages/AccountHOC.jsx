import React from "react";
import AccountInit from "./AccountInit";
import AccountLoading from "./AccountLoading";
import SignUpInit from "./SignUpInit";
import "./AccountHOC.css";

function AccountHOC({
  userInfo,
  auth,
  handleLogout,
  handleDeleteAccount,
  params,
}) {
  return (
    <div className="page-accountHOC">
      {userInfo.info.surname && auth.currentUser && !params["*"] && (
        <AccountInit
          userInfo={userInfo}
          handleLogout={handleLogout}
          handleDeleteAccount={handleDeleteAccount}
        />
      )}
      {!userInfo.info.surname && auth.currentUser && <AccountLoading />}
      {!userInfo.info.surname && !auth.currentUser && !params["*"] && (
        <SignUpInit />
      )}
    </div>
  );
}

export default AccountHOC;
