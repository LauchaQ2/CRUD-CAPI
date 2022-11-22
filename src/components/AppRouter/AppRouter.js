import {BrowserRouter,HashRouter, Routes, Route} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import { PatientProvider } from '../../context/patientsContext';
import RegisterPanel from '../RegisterPanel/RegisterPanel';
import ListaPacientes from '../ListaPacientes/ListaPacientes';
import NavBar from '../NavBar/NavBar';
import PacientePanelContainer from '../PacientePanelContainer/PacientePanelContainer';
import HomePage from '../../pages/HomePage/HomePage';
import ListPage from '../../pages/ListPage/ListPage';



export default function AppRouter(){
   
    return(
        <>
        <HashRouter>
        <PatientProvider>
                <NavBar/>
                <Routes>
                <Route path="/paciente/:id" element={<PacientePanelContainer/>}/>
                <Route path="/registro" element={<RegisterPage/>}/>
                <Route path="/pacientes" element={<ListPage/>}/>
                <Route path="/" element={<HomePage/>}/>
                <Route path='*' element ={<HomePage/>}/> 
                <Route index element={<HomePage/>}/> 
                </Routes>
        </PatientProvider>
        </HashRouter>
</>
    )
}