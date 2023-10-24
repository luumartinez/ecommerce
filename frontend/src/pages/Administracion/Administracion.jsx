import { useContext } from "react";
import Layout from "../../components/Layout/Layout";
import "./administracion.css";
import { ProveedorUsuarios } from "../../context/UsuariosContext";
import TablaCategorias from "../../components/Administracion/Categorias/TablaCategorias";
import { NavLink } from "react-router-dom";
import MenuAdmin from "../../components/Administracion/MenuAdmin";

const Administracion = () => {
  const { autorizacion } = useContext(ProveedorUsuarios);

  return (
    <>
      <Layout title={"Administacion ecommerce"}>
        <main className="mainAdmin container-fluid">
          <h1 className="text-center">ADMINISTRACION</h1>
          <div className="row">
            <div className="col-md-3">
              <MenuAdmin />
            </div>
            <div className="col-md-9">
              <div className="perfilAdmin mb-3">
                <h5 className="text-center">PERFIL ADMIN</h5>
                <p className="ms-3">Nombre: {autorizacion.usuario.nombre}</p>
                <p className="ms-3">
                  Apellido: {autorizacion.usuario.apellido}
                </p>
                <p className="ms-3">Email: {autorizacion.usuario.email}</p>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Administracion;
