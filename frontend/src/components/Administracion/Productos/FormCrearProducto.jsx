import { useContext, useState } from "react";
import { ProveedorCategorias } from "../../../context/CategoriasContext";
import axios from "axios";
import Swal from "sweetalert2";
import { Form } from "react-bootstrap";
const FormCrearProducto = ({ handleClose }) => {
  const { categorias } = useContext(ProveedorCategorias);

  const [categoria, setCategoria] = useState("");
  const [imagen, setImagen] = useState("");
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [envio, setEnvio] = useState("");

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const dataProducto = new FormData();
      dataProducto.append("nombre", nombre);
      dataProducto.append("descripcion", descripcion);
      dataProducto.append("precio", precio);
      dataProducto.append("categoria", categoria);
      dataProducto.append("stock", stock);
      dataProducto.append("imagen", imagen);
      dataProducto.append("envio", JSON.parse(envio));
      const { data } = await axios.post(
        "http://localhost:8080/api/productos/crear",
        dataProducto
      );
      if (data?.success) {
        Swal.fire({
          text: "Creado",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        handleClose()
      } else {
        Swal.fire({
          text: "no se pudo crear",
          icon: "error",
          timer: 2000,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        text: "no se pudo crear",
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
        {imagen && (
          <div className="text-center">
            <img
              src={URL.createObjectURL(imagen)}
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
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ingrese el nombre"
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="text"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Descripcion del producto"
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="number"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          placeholder="$"
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          placeholder="Stock disponible"
        />
      </div>
      <div className="mb-3">
        <Form.Select
          htmlFor="envio"
          className="form-select form-control"
          onChange={(e) => {
            setEnvio(e.target.value);
          }}
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
        <button type="submit" className="btnFormProd w-75" onClick={handleCreate}>
          CREAR PRODUCTO
        </button>
      </div>
    </>
  );
};

export default FormCrearProducto;
