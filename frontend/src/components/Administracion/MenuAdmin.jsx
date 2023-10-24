import { NavLink } from "react-router-dom";
import "./menuAdmin.css";

const MenuAdmin = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group">
        <NavLink
            to="/perfil/admin"
            className="list-group-item listaLinks list-group-item-action"
          >
            ADMINISTRACION
          </NavLink>
          <NavLink
            to="/perfil/admin/categorias"
            className="list-group-item listaLinks list-group-item-action"
          >
            CATEGORIAS
          </NavLink>
          <NavLink
            to="/perfil/admin/productos"
            className="list-group-item listaLinks list-group-item-action"
          >
            PRODUCTOS
          </NavLink>
          <NavLink
            to="/perfil/admin/usuarios"
            className="list-group-item listaLinks list-group-item-action"
          >
            USUARIOS
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default MenuAdmin;
