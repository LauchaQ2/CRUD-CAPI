import React, { useState, useEffect, useContext } from "react";
import "./ListaPacientes.css";
import moment from 'moment'
import PatientContext from "../../context/patientsContext";
import ojo from "../../assets/eye.png";
import {Link} from 'react-router-dom';


export default function ListaPacientes(){



    const {pacienteBuscado, pacientes ,setPacientes} = useContext(PatientContext)
 
    

    return(
        <>
        <table className="table">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>DNI</th>
                <th>Edad</th>
                <th>Patologia</th>
                <th>Fecha</th>
            </tr>
        </thead>
        
        {pacientes.map((paciente) => {
            return (
            <><tbody>
                        <tr key={paciente.id}>
                            <td>{paciente.nombre}</td>
                            <td>{paciente.apellido}</td>
                            <td>{paciente.dni}</td>
                            <td>{paciente.edad}</td>
                           <td>{paciente.patologia}</td>
                            <td>{paciente.fecha}</td>
                            <td><Link to={`/paciente/${paciente.id}`}>
                                <img className="eye" src={ojo}/>
                                </Link>
                                </td>
                        </tr>
                    </tbody></>
        ) 
            })
        }
      </table>
        </>
    )
}

/*
{pacientes.map((paciente) => {
    return (
    <><tbody>
                <tr>
                    <td>{paciente.nombre}</td>
                    <td>{paciente.apellido}</td>
                    <td>{paciente.edad}</td>
                    <td>{paciente.historia.patologia}</td>
                </tr>
            </tbody></>
);
})}




{pacientes.length === 1 ? 
            <><tbody>
                        <tr>
                            <td>{pacientes.nombre}</td>
                            <td>{pacientes.apellido}</td>
                            <td>{pacientes.edad}</td>
                            <td>{pacientes.historia.patologia}</td>
                        </tr>
                    </tbody></>
                    :
                    null}
                    */