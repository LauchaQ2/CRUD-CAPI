import React from "react";
import search from '../../assets/search.png'
import add from '../../assets/plus.png'
import './HomePage.css'
import {Link} from 'react-router-dom';


export default function HomePage(){
    return(
        <>
        <div className="home mt-3 d-flex justify-content-center">
            <Link to={"/registro"}>
                <div className="container-registro">
                <img className="registro" src={add}/>
                <button className="btn btn-success mt-1">REGISTRO DE PACIENTES</button>
                </div>
            </Link>
            <Link to={"/pacientes"}>
                <div className="container-registro">
                <img className="registro" src={search}/>
                <button className="btn btn-success mt-1">BUSCAR PACIENTE</button>
                </div>
            </Link>
        </div>
        </>
        )
}