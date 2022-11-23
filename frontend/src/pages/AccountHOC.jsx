import React from "react";
import AccountInit from "./AccountInit";
import AccountLoading from "./AccountLoading";
import SignUpInit from "./SignUpInit";

function AccountHOC({ userInfo, auth, handleLogout, handleDeleteAccount }) {
  return (
    <>
      {userInfo.info.surname && auth.currentUser && (
        <AccountInit
          userInfo={userInfo}
          handleLogout={handleLogout}
          handleDeleteAccount={handleDeleteAccount}
        />
      )}
      {!userInfo.info.surname && auth.currentUser && <AccountLoading />}
      {!userInfo.info.surname && !auth.currentUser && <SignUpInit />}
    </>
  );
}

export default AccountHOC;
