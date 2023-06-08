import './App.css'
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row } from 'react-bootstrap'; 
import Encabezado from "./components/Encabezado"
import Buscador from "./components/Buscador"
import ListaNoticias from "./components/ListaNoticias"

function App() {
  return (
    <>
    <Encabezado></Encabezado>
    <Buscador></Buscador>
    <ListaNoticias></ListaNoticias>
    </>
  )
}

export default App
