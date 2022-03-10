import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import { PatientProvider } from '../../context/patientsContext';
import RegisterPanel from '../RegisterPanel/RegisterPanel';
import ListaPacientes from '../ListaPacientes/ListaPacientes';
import NavBar from '../NavBar/NavBar';
import PacientePanelContainer from '../PacientePanelContainer/PacientePanelContainer';
import HomePage from '../../pages/HomePage/HomePage';



export default function AppRouter(){
   
    return(
        <>
        <BrowserRouter>
        <PatientProvider>
                <NavBar/>
                <Routes>
                <Route path="/paciente/:id" element={<PacientePanelContainer/>}/>
                <Route path="/registro" element={<RegisterPage/>}/>
                <Route path="/" element={<HomePage/>}/>
                <Route path='*' element ={<HomePage/>}/> 
                <Route index element={<HomePage/>}/> 
                </Routes>
        </PatientProvider>
        </BrowserRouter>
</>
    )
}