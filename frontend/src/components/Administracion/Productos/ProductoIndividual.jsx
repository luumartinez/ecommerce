import { useState, useEffect } from "react";
import Layout from "../../Layout/Layout";
// import { ProveedorCategorias } from "../../../context/CategoriasContext";
import { useParams } from "react-router-dom";
// import { ProveedorProductos } from "../../../context/ProductosContext";
import axios from "axios";

const ProductoIndividual = () => {
  // const { categorias } = useContext(ProveedorCategorias);
  // const { productos } = useContext(ProveedorProductos);
  const params = useParams();
 const [nombre, setNombre] = useState("")
 const [precio, setPrecio] = useState("")
 const [descripcion, setDescripcion] = useState("")
 const [envio, setEnvio] = useState("")
 const [stock, setStock] = useState("")
  const [id, setId] = useState("")
  
  const verProducto = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/productos/${params.slug}`
      );
      setNombre(data.producto.nombre)
      setPrecio(data.producto.precio)
      setDescripcion(data.producto.descripcion)
      setEnvio(data.producto.envio)
      setStock(data.producto.stock)
      setId(data.producto._id)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    verProducto();
  }, []);
  return (
    <>
      <Layout title={"Producto"}>
        <div className="col-md-9 d-flex m-2">
          <div className="card" style={{ width: "18rem" }}>
          <img
                      src={`http://localhost:8080/api/productos/img/${id}`}
                      className="card-img-top"
                      alt={nombre}
                    />
            <div className="card-body">
              <h5 className="card-title">Nombre: {nombre}</h5>
              <h5 className="card-title">Descripcion: {descripcion}</h5>
              <h5 className="card-title">Precio: ${precio}</h5>
              <h5 className="card-title">Envio: {envio}</h5>
              <h5 className="card-title">Stock: {stock}</h5>
              {/* <p className="card-text">${producto.precio}</p>
                <p className="card-text">{producto.descripcion}</p> */}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProductoIndividual;
