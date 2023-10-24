import MenuAdmin from "../../../components/Administracion/MenuAdmin";
import Layout from "../../../components/Layout/Layout";
import "./usuarios.css"

const Usuarios = () => {
  return (
    <>
      <Layout title={"Usuarios Admin"}>
        <main className="mainUsuarios container-fluid">
          <h1 className="text-center">USUARIOS</h1>
          <div className="row">
            <div className="col-md-3">
              <MenuAdmin />
            </div>
            <div className="col-md-3">
              <h4>usuarios</h4>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Usuarios;
