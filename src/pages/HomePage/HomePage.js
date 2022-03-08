import React, {useState, useEffect, useContext} from "react";
import ListaPacientes from "../../components/ListaPacientes/ListaPacientes";
import RegisterPanel from "../../components/RegisterPanel/RegisterPanel";
import {
    collection,
    getDocs,
    addDoc
  } from "firebase/firestore";
  import { db } from '../../firebaseconfig';
import PatientContext from "../../context/patientsContext";
import NavBar from "../../components/NavBar/NavBar";


export default function HomePage(){
    const usersCollectionRef = collection(db, "pacientes");
    const [pacienteBuscado, setPacienteBuscado] = useState([]);

    const {setPacientes, pacientes} = useContext(PatientContext)
    
    useEffect(() => {
        const getUsers = async () => {
          const data = await getDocs(usersCollectionRef);
          setPacientes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getUsers();
      }, [pacienteBuscado]);

      console.log(pacientes)
    return(
            <div>
                <RegisterPanel/>
                <ListaPacientes/>
            </div>
    )
}

