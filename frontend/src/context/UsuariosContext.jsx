import axios from "axios";
import { createContext, useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";

export const ProveedorUsuarios = createContext();

const UsuariosContext = ({ children }) => {
  const [usuarios, setUsuarios] = useState([])

  const [autorizacion, setAutorizacion] = useState({
    usuario: null,
    token:""
  });

  
  useEffect(() => {
    const datos = localStorage.getItem("autorizacion");
    if (datos){
      const parseDatos = JSON.parse(datos);
      setAutorizacion({
        ...autorizacion, usuario: parseDatos.usuario, token:parseDatos.token
      })
    }
  }, []);

  
  axios.defaults.headers.common['Authorization'] = autorizacion?.token
  
  
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
        setAutorizacion({
          usuario: null,
          token:""
        })
        localStorage.removeItem("autorizacion");
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
      <ProveedorUsuarios.Provider value={{ listaUsuarios, usuarios, logOut, autorizacion, setAutorizacion }}>
        {children}
      </ProveedorUsuarios.Provider>
    </>
  );
};

export default UsuariosContext;
