import "./App.css";
import React, {useState, useEffect, useContext} from "react";
import HomePage from "./pages/HomePage/HomePage";
import { db } from './firebaseconfig';
import {
  collection,
  getDocs,
  addDoc
} from "firebase/firestore";
import PatientContext, { PatientProvider } from "./context/patientsContext";
import RegisterPanel from "./components/RegisterPanel/RegisterPanel";
import ListaPacientes from "./components/ListaPacientes/ListaPacientes.js";
import AppRouter from "./components/AppRouter/AppRouter";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <div className="App">
     <PatientProvider>
      <AppRouter/>
    </PatientProvider>
    </div>
  );
}

export default App;
