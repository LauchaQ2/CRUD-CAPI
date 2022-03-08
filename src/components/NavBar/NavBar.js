import React from 'react';
import {Link} from 'react-router-dom';

export default function NavBar(){
    return(
        <div className='container-fluid'>
            <Link to="/">
                  Volver a menú principal
                </Link>
        <h1>CAPI PODOLOGÍA</h1>    
        </div>
    )
}