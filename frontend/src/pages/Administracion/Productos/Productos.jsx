import { useContext, useState } from "react";
import MenuAdmin from "../../../components/Administracion/MenuAdmin";
import Layout from "../../../components/Layout/Layout";
import "./productos.css";
import { ProveedorCategorias } from "./../../../context/CategoriasContext";
import { Modal } from "react-bootstrap";
import FormCrearProducto from "../../../components/Administracion/Productos/FormCrearProducto";

const Productos = () => {
  // const { categorias } = useContext(ProveedorCategorias);

  const [showCrearProd, setShowCrearProd] = useState(false);

  const handleCloseCrearProd = () => setShowCrearProd(false);
  const handleShowCrearProd = () => setShowCrearProd(true);
  return (
    <>
      <Layout title={"Productos Admin"}>
        <main className="mainProductos container-fluid">
          <h1 className="text-center">PRODUCTOS</h1>
          <div className="row">
            <div className="col-md-3">
              <MenuAdmin />
            </div>
            <div className="col-md-6 crearProd">
              <h4>Crear producto</h4>
              <button
                className="btnFormProd ms-3"
                onClick={handleShowCrearProd}
              >
                CREAR
              </button>
            </div>
          </div>
        </main>
      </Layout>

      <Modal show={showCrearProd} onHide={handleCloseCrearProd}>
        <Modal.Header  closeButton>
          <Modal.Title >Crear producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormCrearProducto handleClose={handleCloseCrearProd} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Productos;
