import React from 'react';
import {Link} from 'react-router-dom';
import "./NavBar.css"

export default function NavBar(){
    return(
        <div className='container-fluid p-2 justify-content-center d-flex flex-wrap'>
            <div className='container d-flex justify-content-around align-items-center'>
                <Link className='link' to="/">
                  <p>Volver</p>
                </Link>
            <img className='logo' src="https://i.ibb.co/p4CSbwc/Whats-App-Image-2021-11-11-at-12-27-55-PM.jpg" />
            
        </div>
        </div>
    )
}