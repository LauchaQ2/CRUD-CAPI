import { createContext, useState , useEffect} from "react";
import { db } from '../firebaseconfig';
import {
  collection,
  getDocs,
  addDoc,
  query, 
  orderBy, 
  limit
} from "firebase/firestore";

const PatientContext = createContext();

const PatientProvider = ({children}) => {
    const [pacientes, setPacientes] = useState([]);
    const [newName, setNewName] = useState("");
    const [newLastName, setNewLastName] = useState("");
    const [newDni, setNewDni] = useState("");
    const [newPatologia, setNewPatologia] = useState("");
    const [pacienteBuscado, setPacienteBuscado] = useState([]);
    const [pacienteBuscadoApellido, setPacienteBuscadoApellido] = useState([]);
    const [pacienteBuscadoDni, setPacienteBuscadoDni] = useState([]);
    const [newAge, setNewAge] = useState(0);
    const usersCollectionRef = collection(db, "pacientes");
    const [newObservation, setNewObservation] = useState("")
    const [newDate, setNewDate] = useState("")
    const [size, setSize] = useState(window.innerWidth);
    
    useEffect(()=>{
    const handleSize = () =>{
        setSize(window.innerWidth);
    }
    window.addEventListener("resize", handleSize)
    },[])


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
      const getPacienteByLastName = () =>{
        p = pacientes.filter(paciente => paciente.apellido === pacienteBuscado)  
        console.log(p)
        setPacientes([]);
        setPacientes(p)
      }
      const getPacienteByDni = () =>{
        p = pacientes.filter(paciente => paciente.dni === pacienteBuscado)  
        console.log(p)
        setPacientes([]);
        setPacientes(p)
      }

     const clearPatient = () =>{
        setPacientes([])
     }
     
     const orderByDate = async () =>{
      setPacientes([]);
      const q = query(usersCollectionRef, orderBy("fecha"));
      const querySnapshot = await getDocs(q);
      setPacientes(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
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
        pacienteBuscadoApellido,
        setPacienteBuscadoApellido,
        pacienteBuscadoDni,
        setPacienteBuscadoDni,
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
        setNewDate,
        getPacienteByLastName, 
        getPacienteByDni,
        orderByDate,
        size
    }



    return(
        <PatientContext.Provider value={data} >
            {children}
        </PatientContext.Provider>
    )
}

export { PatientProvider }
export default PatientContext