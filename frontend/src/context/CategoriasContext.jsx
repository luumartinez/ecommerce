import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

export const ProveedorCategorias = createContext();

const CategoriasContext = ({ children }) => {
  const [categorias, setCategorias] = useState();

  // GET

  const mostrarCategorias = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/categorias/lista-categorias"
      );
      setCategorias(response.data.categorias);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    mostrarCategorias();
  }, []);

  // POST

  const crearCategoria = async (nombre) => {
    try {
      const {data} = await axios.post(
        "http://localhost:8080/api/categorias/crear",
        {nombre}
      );
      if (data.success){
        Swal.fire(
          {
            title: "¡Categoría creada!",
            icon: "success",
            showConfirmButton: false,
            background: "#d7addf",
            color: "grey",
            timer: 1200
          }
        );
      }
      mostrarCategorias()
    } catch (error) {
      console.log(error);
    }
  };

    const eliminarCategoria = async(id) =>{
    try {
      const {data} = await axios.delete( `http://localhost:8080/api/categorias/eliminar/${id}`)
      if (data.success){
        Swal.fire(
          {
            title: "¡Categoría eliminada!",
            icon: "success",
            showConfirmButton: false,
            background: "#d7addf",
            color: "grey",
            timer: 1200
          }
        );
      }
      mostrarCategorias()
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <ProveedorCategorias.Provider
        value={{ mostrarCategorias, categorias, crearCategoria, eliminarCategoria }}
      >
        {children}
      </ProveedorCategorias.Provider>
    </>
  );
};

export default CategoriasContext;
