
import './App.css'
import {Routes, Route} from "react-router-dom"
import Inicio from "./pages/Inicio/Inicio"
import PaginaNoEncontrada from './pages/pagNoEncontrada/PaginaNoEncontrada'
import Nosotros from './pages/Nosotros/Nosotros'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Inicio />} />
      <Route path='/nosotros' element={<Nosotros />} />
      <Route path='*' element={<PaginaNoEncontrada />} />
      </Routes>
    </>
  )
}

export default App
