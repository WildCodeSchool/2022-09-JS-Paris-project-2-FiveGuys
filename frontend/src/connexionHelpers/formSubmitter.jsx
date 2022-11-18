/* eslint-disable consistent-return */
/* eslint-disable default-case */
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  deleteUser,
  sendPasswordResetEmail,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import FormCreator from "./formCreator";
import { db } from "../firebase-config";

const FormSubmitter = {
  register: async (
    auth,
    registerMail,
    registerPassword,
    setSignInData,
    signInData,
    navigate
  ) => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerMail,
        registerPassword
      );
      FormCreator.createUser(user.user.uid, signInData);
      navigate("/account/");
    } catch (error) {
      const newField = { ...signInData.mail };
      newField.isValid = false;
      newField.displayMsg = FormSubmitter.errorMessage(error.message);
      setSignInData({ ...signInData, mail: newField });
    }
  },
  login: async (
    auth,
    loginMail,
    loginPassword,
    setConnexionData,
    connexionData,
    navigate
  ) => {
    try {
      await signInWithEmailAndPassword(auth, loginMail, loginPassword);
      navigate("/account/");
    } catch (error) {
      const newField = FormSubmitter.errorMessage(error.message);
      setConnexionData({ ...connexionData, connexionError: newField });
    }
  },
  logout: async (auth, navigate) => {
    await signOut(auth);
    navigate("/account/Confirmation/logOut");
  },
  getUserData: async (id, data, setData) => {
    const docref = doc(db, "users", id);
    await getDoc(docref).then((docu) => {
      setData({ ...data, info: docu.data() });
    });
  },
  updateUserData: async (id, fields, navigate) => {
    await FormCreator.updateUser(id, fields);
    navigate("/account/Confirmation/updated");
  },
  reinitPassWord: (auth, mail, navigate) => {
    sendPasswordResetEmail(auth, mail);
    navigate("/account/Confirmation/reset");
  },
  deleteUser: async (auth, navigate) => {
    signOut(auth);
    await deleteUser(auth.currentUser);
    navigate("/account/Confirmation/deleted");
  },
  errorMessage: (msg) => {
    switch (msg) {
      case "Firebase: Error (auth/email-already-in-use).":
        return "This email belongs to an existing account";
      case "Firebase: Error (auth/wrong-password).":
        return "Incorrect password";
      case "Firebase: Error (auth/user-not-found).":
        return "Unknown email";
    }
  },
};

export default FormSubmitter;
