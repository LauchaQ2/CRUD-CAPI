import React, { useContext, useState, useEffect } from "react";
import {
    doc,
    getDoc
  } from "firebase/firestore";
import { db } from "../../firebaseconfig";
import PacientePanel from "../PacientePanel/PacientePanel";
import { useParams, Link } from 'react-router-dom';
import PatientContext from "../../context/patientsContext";
import moment from "moment";

export default function PacientePanelContainer(){

  const {id} = useParams();

      const [patients, setPatients] = useState({})
      
      async function getPatients(db){
        const docRef = doc(db, "pacientes", id);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        let p = docSnap.data();
        p.id = docSnap.id;
        setPatients(p);
        return p;
      } else {
        console.log("No such document!");
      }
      }
      
      
  
      useEffect(() => {
        getPatients(db)
      }, [id])
      
      const {clearPatient} = useContext(PatientContext)
      const clear = () =>{
        setPatients([])
      }

    return(
        <>
        <PacientePanel id={id} data={patients}/>
        <Link onClick={clearPatient} to="/registro">
        <p onClick={clear}>REGRESAR AL LISTADO GENERAL</p>
        </Link>
        </>
    )
}