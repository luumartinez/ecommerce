import { useContext, useState } from "react";
import { ProveedorCategorias } from "../../../context/CategoriasContext";
import { Modal } from "react-bootstrap";
import FormEditarCat from "./FormEditarCat";
import axios from "axios";
import Swal from "sweetalert2";

const TablaCategorias = () => {
  const { categorias, mostrarCategorias, eliminarCategoria } = useContext(ProveedorCategorias);

  // MODAL EDIT

  const [showEditCat, setShowEditCat] = useState(false);

  const handleCloseEditCat = () => setShowEditCat(false);
  const handleShowEditCat = () => setShowEditCat(true);

  // PUT

  const [seleccion, setSeleccion] = useState(null);
  const [editarNom, setEditarNom] = useState("");

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `http://localhost:8080/api/categorias/editar/${seleccion._id}`,
        { nombre: editarNom }
      );
      if (data.success) {
        Swal.fire({
          title: "¡Categoría editada!",
          icon: "success",
          showConfirmButton: false,
          background: "#d7addf",
          color: "grey",
          timer: 1200,
        });
      }
      setSeleccion(null);
      setEditarNom("");
      handleCloseEditCat();
      mostrarCategorias();
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <table className="table text-center">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map((categoria) => (
            <tr key={categoria._id}>
              <td>{categoria.nombre}</td>
              <td>
                <button
                  onClick={() => {
                    handleShowEditCat();
                    setEditarNom(categoria.nombre);
                    setSeleccion(categoria);
                  }}
                  className="btnEditCat me-2"
                >
                  Editar
                </button>
                <button onClick={() => {eliminarCategoria(categoria._id)}}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal centered show={showEditCat} onHide={handleCloseEditCat}>
        <Modal.Header closeButton>
          <Modal.Title>EDITAR CATEGORIA</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormEditarCat
            value={editarNom}
            setValue={setEditarNom}
            handleEdit={handleEdit}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TablaCategorias;
