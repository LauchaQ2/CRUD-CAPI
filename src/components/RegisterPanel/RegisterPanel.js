import React, { useState, useEffect, useContext } from "react";
import PatientContext from '../../context/patientsContext';
import { db } from '../../firebaseconfig';
import {
    collection,
    getDocs,
    addDoc
  } from "firebase/firestore";
import './RegisterPanel.css'

export default function RegisterPanel(){

        const {getPacienteByLastName, getPacienteByDni, pacienteBuscadoDni, setPacienteBuscadoDni,newDate, setNewDate, newDni, setNewDni, setNewName, newPatologia, setNewLastName, setNewAge, setNewPatologia, setPacienteBuscado, getPaciente, createUser, allUsers} = useContext(PatientContext)
    /*const createUser = async () => {
        await addDoc(usersCollectionRef, { 
          nombre: newName, 
          apellido: newLastName, 
          edad: Number(newAge), 
          historia: {patologia: newPatologia},
          fecha: new Date()
         })
      };

      const allUsers = async () => {
        setPacientes([]);
        const data = await getDocs(usersCollectionRef);
        setPacientes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        console.log(pacientes)
      };
      
      var p = [];
  
      const getPaciente = () =>{
        p = pacientes.filter(paciente => paciente.nombre === pacienteBuscado)  
        console.log(p)
        setPacientes([]);
        setPacientes(p)
      }
*/
       
      console.log(newPatologia)
     
      return(
            <>  
            <div className="container-fluid mt-3 mb-3">
            <input
                placeholder="FECHA..."
                onChange={(event) => {
                    setNewDate(event.target.value.replace(/\D/g, ""));
                } } />
            <input
                placeholder="Nombre..."
                onChange={(event) => {
                    setNewName(event.target.value);
                } } />
                <input
                placeholder="Apellido..."
                onChange={(event) => {
                    setNewLastName(event.target.value);
                } } />
                <input
                placeholder="DNI..."
                onChange={(event) => {
                    setNewDni(event.target.value);
                } } />
                <input
                type="number"
                placeholder="Edad..."
                onChange={(event) => {
                    setNewAge(event.target.value);
                } } />
                <input
                placeholder="Patologia..."
                onChange={(event) => {
                    setNewPatologia(event.target.value);
                } } />
                <button onClick={createUser}> Crear nuevo paciente </button>
                
                <div className="container-fluid d-flex justify-content-center mt-3">
                <input
                placeholder="Buscar por..."
                onChange={(event) => {
                    setPacienteBuscado(event.target.value);
                } } />
                <button onClick={getPaciente}>Buscar Paciente Por Nombre</button>
                <button onClick={getPacienteByLastName}>Buscar Paciente Por Apellido</button>
                <button onClick={getPacienteByDni}>Buscar Paciente Por DNI</button>
                <button onClick={allUsers}>Ver todos los pacientes</button>
                
                </div>
                </div>
                </>
        )
}