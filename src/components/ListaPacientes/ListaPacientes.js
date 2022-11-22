import React, { useState, useEffect, useContext } from "react";
import "./ListaPacientes.css";
import moment from 'moment';
import 'moment/locale/es';
import PatientContext from "../../context/patientsContext";
import ojo from "../../assets/eye.png";
import {Link} from 'react-router-dom';


export default function ListaPacientes(){



    const {pacienteBuscado, pacientes, orderByDate, allUsers, getPacienteByLastName, getPacienteByDni, setPacienteBuscado, getPaciente,} = useContext(PatientContext)

    

    return(
        <>
        <div className="container-fluid d-flex flex-wrap justify-content-center mt-3">
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
        <button onClick={orderByDate}>ordenar por fecha</button>
        <div className="container-fluid d-flex justify-content-center p-0">
        <table className="table">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>DNI</th>
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
                            <td>{moment(paciente.fecha).format('L')}</td>
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
      </div>
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