import { Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio/Inicio";
import PaginaNoEncontrada from "../pages/pagNoEncontrada/PaginaNoEncontrada";
import Nosotros from "../pages/Nosotros/Nosotros";
import Registro from "../pages/registro/Registro";
import Perfil from "../pages/Perfil/Perfil";
import RutasPrivadas from "./RutasPrivadas";
import RutasAdmin from "./RutasAdmin";
import Administracion from "../pages/Administracion/Administracion";

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/perfil" element={<RutasPrivadas />}>
          <Route path="" element={<Perfil />} />
        </Route>
        <Route path="/administracion" element={<RutasAdmin />}>
          <Route path="" element={<Administracion />} />
        </Route>
        <Route path="/registro" element={<Registro />} />
        <Route path="*" element={<PaginaNoEncontrada />} />
      </Routes>
    </>
  );
};

export default Rutas;
