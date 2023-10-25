import { useContext, useState } from "react";
import MenuAdmin from "../../../components/Administracion/MenuAdmin";
import Layout from "../../../components/Layout/Layout";
import "./productos.css";
import { Modal } from "react-bootstrap";
import FormCrearProducto from "../../../components/Administracion/Productos/FormCrearProducto";
import { ProveedorProductos } from "../../../context/ProductosContext";

const Productos = () => {
  const { productos } = useContext(ProveedorProductos);

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
            <div className="col-md-9">
              <div className="crearProd col-md-9">
                <h4>Crear producto</h4>
                <button
                  className="btnFormProd ms-3"
                  onClick={handleShowCrearProd}
                >
                  CREAR
                </button>
              </div>
              <div className="col-md-9 d-flex m-2">
                {productos?.map((producto) => (
                  <div
                    className="card"
                    style={{ width: "18rem" }}
                    key={producto._id}
                  >
                    <img
                      src={`http://localhost:8080/api/productos/img/${producto._id}`}
                      className="card-img-top"
                      alt={producto.nombre}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{producto.nombre}</h5>
                      <p className="card-text">{producto.descripcion}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </Layout>

      <Modal show={showCrearProd} onHide={handleCloseCrearProd}>
        <Modal.Body className="modalCrearProd ">
          <div className="d-flex justify-content-end">
            <button
              onClick={handleCloseCrearProd}
              className="btnCerrarCrearProd btn mb-3"
            />
          </div>
          <FormCrearProducto handleClose={handleCloseCrearProd} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Productos;
