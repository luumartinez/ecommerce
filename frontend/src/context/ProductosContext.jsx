import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProveedorProductos = createContext();

const ProductosContext = ({ children }) => {
  const [productos, setProductos] = useState([]);

  const listaProductos = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/productos/lista-productos"
      );
      if (data.success) {
        setProductos(data.productos)
        console.log(data.productos);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listaProductos();
  }, []);

  return (
    <>
      <ProveedorProductos.Provider value={{ listaProductos, productos }}>
        {children}
      </ProveedorProductos.Provider>
    </>
  );
};

export default ProductosContext;
