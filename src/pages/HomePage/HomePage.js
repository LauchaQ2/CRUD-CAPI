import React from "react";
import registro from '../../assets/registro.png'
import './HomePage.css'
import {Link} from 'react-router-dom';


export default function HomePage(){
    return(
        <>
        <div className="home d-flex justify-content-left">
            <Link to={"/registro"}>
                <img className="registro" src={registro}/>
                <h2>REGISTRO DE PACIENTES</h2>
            </Link>
        </div>
        </>
        )
}