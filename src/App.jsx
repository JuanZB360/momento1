import { useState } from 'react'
import './App.css'
import Finanzas from './views/Finanzas';

function App() {

  const [registros, setRegistros] = useState([]);

  const agregarRegistro = (nuevoRegistro) => {
    setRegistros([...registros, nuevoRegistro]);
  };

  console.log(registros);

  return (
    <>
      <Finanzas agregarRegistro={agregarRegistro} registros={registros} />
    </>
  )
}

export default App
