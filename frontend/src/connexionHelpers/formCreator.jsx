import { doc, updateDoc, deleteDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase-config";

const FormCreator = {
  updateUser: async (id, fields) => {
    const userDoc = doc(db, "users", id);
    await updateDoc(
      userDoc,
      fields.reduce((acc, val) => {
        return { ...acc, [val.name]: val.value };
      }, {})
    );
  },
  deleteUserData: async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  },
  deleteUser: async (auth) => {
    console.warn(auth);
  },
  createUser: async (id, data) => {
    await setDoc(doc(db, "users", id), {
      gender: data.gender,
      mail: data.mail.value,
      birth: data.birth.value,
      name: data.name.value,
      surname: data.surname.value,
      phone: data.phone.value,
      favs: [],
      bought: [],
    });
  },
};

export default FormCreator;
