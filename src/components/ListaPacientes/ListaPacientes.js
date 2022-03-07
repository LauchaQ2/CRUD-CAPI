import React, { useState, useEffect } from "react";
import "./ListaPacientes.css";

export default function ListaPacientes({pacientes,nuevo}){
    return(
        <>
        <table className="table">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Edad</th>
                <th>Patologia</th>
            </tr>
        </thead>
        
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

      </table>
        </>
    )
}