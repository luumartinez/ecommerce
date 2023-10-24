import MenuAdmin from "../../components/Administracion/MenuAdmin";
import Layout from "../../components/Layout/Layout";


const Productos = () => {
    return (
        <>
            <Layout title={"Productos Admin"}>
        <div className="row">
          <div className="col-md-3">
            <MenuAdmin />
          </div>
          <div className="col-md-3">
            <h1>PRODUCTOS</h1>
          </div>
        </div>
      </Layout>
        </>
    );
};

export default Productos;