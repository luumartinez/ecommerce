import { useContext, useEffect, useState } from "react";
import { ProveedorCategorias } from "../../../context/CategoriasContext";
import axios from "axios";
import Swal from "sweetalert2";
import { Form } from "react-bootstrap";
import { ProveedorProductos } from "../../../context/ProductosContext";

const FormEditarProducto = ({ handleCloseEditProd, producto }) => {
  const { categorias } = useContext(ProveedorCategorias);
  const { listaProductos } = useContext(ProveedorProductos);

  const [categoria, setCategoria] = useState(producto.categoria._id);
  const [imagen, setImagen] = useState("");
  const [nombre, setNombre] = useState(producto.nombre);
  const [descripcion, setDescripcion] = useState(producto.descripcion);
  const [precio, setPrecio] = useState(producto.precio);
  const [stock, setStock] = useState(producto.stock);
  const [envio, setEnvio] = useState(producto.envio);
  const [id, setId] = useState(producto._id);

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const dataProducto = new FormData();
      dataProducto.append("nombre", nombre);
      dataProducto.append("descripcion", descripcion);
      dataProducto.append("precio", precio);
      dataProducto.append("categoria", categoria);
      dataProducto.append("stock", stock);
      imagen && dataProducto.append("imagen", imagen);
      dataProducto.append("envio", JSON.parse(envio));
      const { data } = await axios.put(
        `http://localhost:8080/api/productos/editar/${id}`,
        dataProducto
      );
      if (data?.success) {
        Swal.fire({
          text: "Editado",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        handleCloseEditProd();
        listaProductos()
      } else {
        Swal.fire({
          text: "No se pudo editar",
          icon: "error",
          timer: 2000,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        text: "No se pudo editar",
        icon: "error",
        timer: 2000,
        showConfirmButton: false,
      });
    }
  };
  return (
    <>
      <Form.Select
        className="form-select form-control mb-3"
        onChange={(e) => {
          setCategoria(e.target.value);
        }}
        htmlFor="categoria"
        value={categoria}
      >
        {categorias?.map((cat) => (
          <option name="categoria" key={cat._id} value={cat._id}>
            {cat.nombre}
          </option>
        ))}
      </Form.Select>
      <div className="mb-3">
        <input
          className="form-control"
          name="imagenProd"
          type="file"
          accept="image/*"
          id="formFile"
          onChange={(e) => setImagen(e.target.files[0])}
        />
      </div>

      <div className="mb-3">
        {imagen ? (
          <div className="text-center">
            <img
              src={URL.createObjectURL(imagen)}
              alt="img prod"
              height={"100px"}
              className="img img-responsive"
            />
          </div>
        ) : (
          <div className="text-center">
            <img
              src={`http://localhost:8080/api/productos/img/${id}`}
              alt="img prod"
              height={"100px"}
              className="img img-responsive"
            />
          </div>
        )}
      </div>

      <div className="mb-3">
        <input
          className="form-control"
          type="text"
          value={nombre}
          // onChange={(e) => setNombre(e.target.value)}
          onChange={(e) => {
            setNombre(e.target.value);
          }}
          placeholder="Ingrese el nombre"
        />
      </div>

      <div className="mb-3">
        <input
          className="form-control"
          type="text"
          value={descripcion}
          onChange={(e) => {
            setDescripcion(e.target.value);
          }}
          placeholder="Descripcion del producto"
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="number"
          value={precio}
          onChange={(e) => {
            setPrecio(e.target.value);
          }}
          placeholder="$"
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="number"
          value={stock}
          onChange={(e) => {
            setStock(e.target.value);
          }}
          placeholder="Stock disponible"
        />
      </div>
      <div className="mb-3">
        <Form.Select
          htmlFor="envio"
          className="form-select form-control"
          // onChange={handleChange}
          onChange={(e) => {
            setEnvio(e.target.value);
          }}
          value={envio ? "true" : "false"}
        >
          <option>Envio</option>
          <option name="envio" value="true">
            Si
          </option>
          <option name="envio" value="false">
            No
          </option>
        </Form.Select>
      </div>
      <div className="mb-3 d-flex justify-content-center">
        <button type="submit" onClick={handleEdit} className="btnFormProd w-75">
          EDITAR PRODUCTO
        </button>
      </div>
    </>
  );
};

export default FormEditarProducto;
