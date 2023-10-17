import axios from "axios";
import { createContext, useState, useEffect } from "react";
import Swal from "sweetalert2";

export const ProveedorUsuarios = createContext();

const UsuariosContext = ({ children }) => {
  const [usuarios, setUsuarios] = useState([])

  axios.defaults.headers.common['Authorization'] = localStorage.getItem("token")

  // useEffect(() => {
  //   const datos = localStorage.getItem("usuarios");
  //   if (datos){
  //     const parseDatos = JSON.parse(datos);
  //     setUsuarios({
  //       ...usuarios, usuario: parseDatos.usuario, token:parseDatos.token
  //     })
  //   }
  //   console.log(usuarios)
  // }, []);
  const logOut = () =>{
    Swal.fire({
      icon: "warning",
      title: "¿Seguro que querés cerrar sesión?",
      showCancelButton: true,
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#89dc89",
      cancelButtonColor: "#e84e4e",
      background: "#d7addf",
      color: "grey",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("usuario");
        localStorage.removeItem("token");
        window.location.href = "/";
      } else if (result.isDenied) {
        return;
      }
    });
  }

  const listaUsuarios = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/usuarios");
      setUsuarios(response.data);
    } catch {
      console.log(error);
    }
  };



  return (
    <>
      <ProveedorUsuarios.Provider value={{ listaUsuarios, usuarios, logOut }}>
        {children}
      </ProveedorUsuarios.Provider>
    </>
  );
};

export default UsuariosContext;
