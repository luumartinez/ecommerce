import { useContext, useState } from "react";
import MenuAdmin from "../../../components/Administracion/MenuAdmin";
import Layout from "../../../components/Layout/Layout";
import "./productos.css";
import { Modal } from "react-bootstrap";
import FormCrearProducto from "../../../components/Administracion/Productos/FormCrearProducto";
import { ProveedorProductos } from "../../../context/ProductosContext";
import FormEditarProducto from "../../../components/Administracion/Productos/FormEditarProducto";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Productos = () => {
  const { productos, listaProductos } = useContext(ProveedorProductos);

  const [showCrearProd, setShowCrearProd] = useState(false);

  const handleCloseCrearProd = () => setShowCrearProd(false);
  const handleShowCrearProd = () => setShowCrearProd(true);

  const [showEditarProd, setShowEditarProd] = useState(false);

  const handleCloseEditarProd = () => setShowEditarProd(false);
  const handleShowEditarProd = () => setShowEditarProd(true);

  const [editProd, setEditProd] = useState();

  const handleEdit = (producto) => {
    setEditProd(producto);
    handleShowEditarProd();
  };

  const handleEliminar = async (producto) => {
    try {
      await Swal.fire({
        title: `¿Seguro que quieres eliminar ${producto.nombre}`,
        icon: "warning",
        showDenyButton: true,
        confirmButtonText: "Eliminar",
        denyButtonText: `Cancelar`,
      }).then(async (result) => {
        if (result.isConfirmed) {
          const { data } = await axios.delete(
            `http://localhost:8080/api/productos/eliminar/${producto._id}`
          );

          if (data.success) {
            Swal.fire({
              icon: "success",
              text: "Producto eliminado",
              showConfirmButton: false,
              timer: 1200
            });
          }
          listaProductos();
        } else if (result.isDenied) {
          Swal.fire({
            title: "Producto no eliminado",
            showConfirmButton: false,
            timer: 1200
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
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
                <h4>Nuevo producto</h4>
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
                      <Link to={`${producto.slug}`}>
                        <h5 className="card-title">{producto.nombre}</h5>{" "}
                      </Link>
                      <p className="card-text">${producto.precio}</p>
                      <p className="card-text">{producto.descripcion}</p>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button
                        onClick={() => handleEdit(producto)}
                        className="btnEditarP me-2"
                      >
                        EDITAR
                      </button>

                      <button
                        onClick={() => handleEliminar(producto)}
                        className="btnEliminarP"
                      >
                        ELIMINAR
                      </button>
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

      <Modal show={showEditarProd} onHide={handleCloseEditarProd}>
        <Modal.Body className="modalCrearProd ">
          <div className="d-flex justify-content-end">
            <button
              onClick={handleCloseEditarProd}
              className="btnCerrarCrearProd btn mb-3"
            />
          </div>
          <FormEditarProducto
            handleCloseEditProd={handleCloseEditarProd}
            producto={editProd}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Productos;
