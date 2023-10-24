import { useContext } from "react";
import Layout from "../../components/Layout/Layout";
import "./administracion.css";
import { ProveedorUsuarios } from "../../context/UsuariosContext";
import MenuAdmin from "../../components/Administracion/MenuAdmin";
import iconAdmin from "../../img/tarjeta-de-identificacion.png";

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
              <h3 className="text-start ms-2">PERFIL ADMIN</h3>
              <div className="perfilAdmin mb-3">
                <div className="imgAdmin">
                  <img style={{ width: "100%", marginTop:"-25px"}} src={iconAdmin} />
                </div>
                <div className="datosAdmin">
                  <p className="ms-3 mt-4">Nombre: {autorizacion.usuario.nombre}</p>
                  <p className="ms-3">
                    Apellido: {autorizacion.usuario.apellido}
                  </p>
                  <p className="ms-3">Email: {autorizacion.usuario.email}</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Administracion;
