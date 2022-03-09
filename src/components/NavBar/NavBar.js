import React from 'react';
import {Link} from 'react-router-dom';
import "./NavBar.css"

export default function NavBar(){
    return(
        <div className='container-fluid justify-content-center d-flex flex-wrap'>
            <div className='container d-block'>
                <Link className='link' to="/">
                  <p>Volver a menú principal</p>
                </Link>
        <img className='logo' src="https://i.ibb.co/p4CSbwc/Whats-App-Image-2021-11-11-at-12-27-55-PM.jpg" />
        </div>        
        </div>
    )
}