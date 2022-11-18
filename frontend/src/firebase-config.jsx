import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCSD3jmHizdqRlIqZH_n8KZzlQUHg_GBTk",
  authDomain: "starwarsmeteo.firebaseapp.com",
  projectId: "starwarsmeteo",
  storageBucket: "starwarsmeteo.appspot.com",
  messagingSenderId: "716352973143",
  appId: "1:716352973143:web:2a3b5190bfbbc48aa9b612",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
