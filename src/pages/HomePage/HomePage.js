import React from "react";
import registro from '../../assets/registro.png'
import './HomePage.css'
import {Link} from 'react-router-dom';


export default function HomePage(){
    return(
        <>
        <div className="home mt-3 d-flex justify-content-center">
            <Link to={"/registro"}>
                <div className="container-registro">
                <img className="registro" src={registro}/>
                <button className="btn btn-success mt-1">REGISTRO DE PACIENTES</button>
                </div>
            </Link>
        </div>
        </>
        )
}