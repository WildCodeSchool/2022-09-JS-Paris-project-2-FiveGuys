import { createContext, useMemo, useState } from "react";
import { auth } from "../firebase-config";

const ConnexionContext = createContext();

export function ConnexionContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState({
    auth,
    info: {},
  });
  const userProfile = useMemo(
    () => ({
      userInfo,
      setUserInfo,
    }),
    [userInfo, setUserInfo]
  );

  return (
    <ConnexionContext.Provider value={userProfile}>
      {children}
    </ConnexionContext.Provider>
  );
}

export default ConnexionContext;
