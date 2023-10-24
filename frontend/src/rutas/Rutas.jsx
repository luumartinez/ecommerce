import { Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio/Inicio";
import PaginaNoEncontrada from "../pages/pagNoEncontrada/PaginaNoEncontrada";
import Nosotros from "../pages/Nosotros/Nosotros";
import Registro from "../pages/registro/Registro";
import Perfil from "../pages/Perfil/Perfil";
import RutasPrivadas from "./RutasPrivadas";
import RutasAdmin from "./RutasAdmin";
import Administracion from "../pages/Administracion/Administracion";
import Usuarios from "../pages/Administracion/Usuarios/Usuarios";
import Categorias from "../pages/Administracion/Categorias/Categorias";
import Productos from "../pages/Administracion/Productos/Productos";

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/perfil" element={<RutasPrivadas />}>
          <Route path="usuario" element={<Perfil />} />
        </Route>
        <Route path="/perfil" element={<RutasAdmin />}>
          <Route path="admin" element={<Administracion />} />
          <Route path="admin/categorias" element={<Categorias />} />
          <Route path="admin/productos" element={<Productos />} />
          <Route path="admin/usuarios" element={<Usuarios />} />
        </Route>
        <Route path="/registro" element={<Registro />} />
        <Route path="*" element={<PaginaNoEncontrada />} />
      </Routes>
    </>
  );
};

export default Rutas;
