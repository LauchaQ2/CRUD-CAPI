import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDK8ChpGY7UCtvTgH6knOtMDrRnj4ITVw",
  authDomain: "capi-podologia.firebaseapp.com",
  projectId: "capi-podologia",
  storageBucket: "capi-podologia.appspot.com",
  messagingSenderId: "904118776717",
  appId: "1:904118776717:web:c4d4202a53d7d1874243c4",
  measurementId: "G-TS99RCTS0P"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);