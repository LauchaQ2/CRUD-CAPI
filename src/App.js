import { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebaseconfig";
import {
  collection,
  getDocs,
  addDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  doc,
  query, 
  where
} from "firebase/firestore";
import ListaPacientes from "./components/ListaPacientes/ListaPacientes.js";

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [nuevo, setNuevo] = useState()
  const [newName, setNewName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newPatologia, setNewPatologia] = useState("");
  const [pacienteBuscado, setPacienteBuscado] = useState("");
  const [newAge, setNewAge] = useState(0);
  const usersCollectionRef = collection(db, "pacientes");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { 
      nombre: newName, 
      apellido: newLastName, 
      edad: Number(newAge), 
      historia: {patologia: newPatologia} });
  };
  
 /* useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setPacientes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);*/

  async function getPaciente(){
    const q = query(collection(db, "pacientes"), where("nombre", "==", pacienteBuscado));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      console.log(pacientes)
      setPacientes(doc.data())
    });
  }
  

    
  return (
    <div className="App">
    
    <input
        placeholder="Name..."
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      />
      <input
        placeholder="Apellido..."
        onChange={(event) => {
          setNewLastName(event.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Edad..."
        onChange={(event) => {
          setNewAge(event.target.value);
        }}
      />
      <input
        placeholder="Patologia..."
        onChange={(event) => {
          setNewPatologia(event.target.value);
        }}
      />
      <button onClick={createUser}> Crear nuevo paciente </button>
      <input
        placeholder="Buscar por nombre..."
        onChange={(event) => {
          setPacienteBuscado(event.target.value);
        }}
      />
      <button onClick={getPaciente}>Buscar Paciente</button>
       <ListaPacientes pacientes={pacientes} nuevo={nuevo}/>
    </div>
  );
}

export default App;
