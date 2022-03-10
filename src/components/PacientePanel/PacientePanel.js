import React, {useContext} from "react";
import moment from "moment";
import PatientContext from "../../context/patientsContext";
import { db } from '../../firebaseconfig';
import {
    collection,
    updateDoc,
    doc
  } from "firebase/firestore";
import './PacientePanel.css'

export default function PacientePanel({data,id}){

    const {newObservation, setNewObservation} = useContext(PatientContext)

    const washingtonRef = doc(db, "pacientes", id);

    const UpdateObs = async () =>{
        await updateDoc(washingtonRef, {
        observaciones: newObservation
        });
        window.location.reload(false)
    }


    return(
        <>
        <p>NOMBRE: {data.nombre}</p>
        <p>APELLIDO: {data.apellido}</p>
        <p>EDAD: {data.edad}</p>
        <p>DNI: {data.dni}</p>
        <p>PATOLOGÍA: {data.patologia}</p>
        <p>FECHA DE CONSULTA: {moment(data.fecha).format('L')}</p>
        <p>OBSERVACIONES: {data.observaciones}</p>
        <input
                placeholder="Observaciones..."
                onChange={(event) => {
                    setNewObservation(event.target.value);
                } } />
            <button onClick={UpdateObs}>Añadir observación</button>
        </>
    )
}