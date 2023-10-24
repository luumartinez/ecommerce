import MenuAdmin from "../../components/Administracion/MenuAdmin";
import Layout from "../../components/Layout/Layout";


const Usuarios = () => {
    return (
        <>
            <Layout title={"Usuarios Admin"}>
        <div className="row">
          <div className="col-md-3">
            <MenuAdmin />
          </div>
          <div className="col-md-3">
            <h1>USUARIOS</h1>
          </div>
        </div>
      </Layout>
        </>
    );
};

export default Usuarios;