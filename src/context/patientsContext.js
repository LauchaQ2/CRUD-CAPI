import { createContext, useState , useEffect} from "react";
import { db } from '../firebaseconfig';
import {
  collection,
  getDocs,
  addDoc
} from "firebase/firestore";

const PatientContext = createContext();

const PatientProvider = ({children}) => {
    const [pacientes, setPacientes] = useState([]);
    const [newName, setNewName] = useState("");
    const [newLastName, setNewLastName] = useState("");
    const [newDni, setNewDni] = useState("");
    const [newPatologia, setNewPatologia] = useState("");
    const [pacienteBuscado, setPacienteBuscado] = useState([]);
    const [newAge, setNewAge] = useState(0);
    const usersCollectionRef = collection(db, "pacientes");
    const [newObservation, setNewObservation] = useState("")
    const [newDate, setNewDate] = useState("")


    const createUser = async () => {
        await addDoc(usersCollectionRef, { 
          nombre: newName, 
          apellido: newLastName,
          dni: newDni,
          edad: Number(newAge), 
          fecha: newDate,
          patologia: newPatologia,
          observaciones: newObservation,
         })
         allUsers();
      };

    console.log(pacientes)
      
    const allUsers = async () => {
        setPacientes([]);
        const data = await getDocs(usersCollectionRef);
        setPacientes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        console.log(pacientes)
      };

      var p = [];
  
      const getPaciente = () =>{
        p = pacientes.filter(paciente => paciente.nombre === pacienteBuscado)  
        console.log(p)
        setPacientes([]);
        setPacientes(p)
      }

     const clearPatient = () =>{
        setPacientes([])
     }
  

    const data = {
        pacienteBuscado,
        setPacientes,
        setNewName,
        setNewLastName,
        setNewPatologia,
        setNewAge,
        pacienteBuscado,
        setPacienteBuscado,
        pacientes,
        createUser,
        newPatologia,
        newDni, 
        setNewDni,
        allUsers,
        getPaciente,
        newObservation, 
        setNewObservation,
        clearPatient,
        newDate, 
        setNewDate
    }



    return(
        <PatientContext.Provider value={data} >
            {children}
        </PatientContext.Provider>
    )
}

export { PatientProvider }
export default PatientContext