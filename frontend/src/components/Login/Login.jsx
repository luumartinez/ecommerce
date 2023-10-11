import axios from "axios";
import "./login.css";
import { useState } from "react";
import Swal from "sweetalert2";

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

const handleSubmit = async (e) =>{
  e.preventDefault()

  try {
    const response = await axios.post("http://localhost:8080/api/login",{email, password})

    if(response.status === 200){
      Swal.fire({
        title: "Inicio de sesión exitoso",
        icon: "success",
        showConfirmButton: false,
        background: "#d7addf",
        color: "grey",
      },
      setTimeout(()=>{
        window.location.href = "/"
      }, 1200))
    }
  } catch (error) {
    if (error.response){
      if(error.response.status === 404){
        Swal.fire({
          title: "El email o la contraseña no son correctos",
          icon: "error",
          showConfirmButton: false,
          background: "#d7addf",
          color: "grey",
          timer: 1500
        })
      }
      if(error.response.status === 500){
        Swal.fire({
          title: "Error del servidor",
          icon: "error",
          showConfirmButton: false,
          background: "#d7addf",
          color: "grey",
          timer:1500
        })
      }
    }
  }
}

  return (
    <>
    <div><h3>INICIAR SESIÓN</h3></div>
      <form onSubmit={handleSubmit} className="formLogin">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            EMAIL
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            className="form-control"
            id="exampleInputEmail"
            placeholder="ejemplo@ejemplo.com"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            CONTRASEÑA
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            className="form-control"
            placeholder="Contraseña"
            required
          />
        </div>
        <button type="submit" className="botonLogin">
          INICIAR SESIÓN
        </button>
      </form>
    </>
  );
};

export default Login;
