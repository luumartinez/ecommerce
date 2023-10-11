import Layout from "../../components/Layout/Layout";
import "./registro.css";
import logoReg from "../../img/tarjeta-de-identificacion.png";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Registro = () => {
  const [formUsuarios, setFormUsurios] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormUsurios({ ...formUsuarios, [e.target.name]: e.target.value });
  };

  const [errorNombre, setErrorNombre] = useState("");
  const [errorApellido, setErrorApellido] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const validacionDatosPerso = (datosPerso) => {
    const expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{2,20}$/;
    return expReg.test(datosPerso);
  };

  const handleBlurNombre = () => {
    const nombreValido = validacionDatosPerso(formUsuarios.nombre);

    if (!nombreValido) {
      setErrorNombre("Ingrese un nombre válido");
    } else {
      setErrorNombre("");
    }
  };

  const errorNom = errorNombre !== "";

  const handleBlurApellido = () => {
    const apellidoValido = validacionDatosPerso(formUsuarios.apellido);

    if (!apellidoValido) {
      setErrorApellido("Ingrese un apellido válido");
    } else {
      setErrorApellido("");
    }
  };

  const errorApe = errorApellido !== "";

  const validacionEmail = (email) => {
    const expReg = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    return expReg.test(email);
  };

  const handleBlurEmail = () => {
    const emailValido = validacionEmail(formUsuarios.email);
    if (!emailValido) {
      setErrorEmail("Ingrese un correo correcto");
    } else {
      setErrorEmail("");
    }
  };

  const errorMail = errorEmail !== "";

  const validacionPassword = (password) => {
    const expReg = /^[A-Za-z0-9!?-]{4,15}$/;
    return expReg.test(password);
  };

  const handleBlurPassword = () => {
    const passwordValida = validacionPassword(formUsuarios.password);
    if (!passwordValida) {
      setErrorPassword("Minimo 4 caracteres y maximo 15");
    } else {
      setErrorPassword("");
    }
  };

  const errorPass = errorPassword !== "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/registro",
        formUsuarios
      );
      if (response.status === 201) {
        setFormUsurios({
          nombre: "",
          apellido: "",
          email: "",
          password: "",
        });
        Swal.fire(
          {
            title: "¡Listo!",
            text: "Registro realizaco con éxito",
            icon: "success",
            showConfirmButton: false,
            background: "#d7addf",
            color: "grey",
          },
          setTimeout(() => {
            window.location.href = "/";
          }, 1500)
        );
      }
    } catch (error) {
      console.log(error)
      if (error.response) {
        if (error.response.status === 400) {
          Swal.fire({
            icon: "error",
            title: "¡Error 404!",
            text: "No se puede registrar",
            background: "#d7addf",
            color: "grey",
            confirmButtonColor: "#842296"
          });
        };
        if (error.response.status === 404){
          Swal.fire({
            icon: "error",
            title: "¡Error!",
            text: "No se puede registrar",
            background: "#d7addf",
            color: "grey",
            confirmButtonColor: "#842296"
          });
        } else if (error.response.status === 409){
          Swal.fire({
            icon: "error",
            title: "¡Error!",
            text: "El email ya se encuentra registrado",
            background: "#d7addf",
            color: "grey",
            confirmButtonColor: "#842296"
          });
        }
      }
    }
  };

  return (
    <>
      <Layout title={"Registro - ecommerce"}>
        <div className="pagRegistro">
          <h1>
            REGISTRO
            <p className="d-flex justify-content-center mb-0">
              {" "}
              <img style={{ width: "10vh" }} src={logoReg} />
            </p>
          </h1>

          <div className="contenedorRegistro mb-3">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">
                  NOMBRE
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={formUsuarios.nombre}
                  onChange={handleChange}
                  onBlur={handleBlurNombre}
                  className={`form-control ${errorNom ? "error-icon" : ""}`}
                  id="exampleInputNombre"
                  placeholder="Ingrese su nombre"
                  minLength="2"
                  maxLength="20"
                  pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
                  required
                />
                <div className="mjeErrorReg">{errorNombre}</div>
              </div>
              <div className="mb-3">
                <label htmlFor="apellido" className="form-label">
                  APELLIDO
                </label>
                <input
                  type="text"
                  name="apellido"
                  value={formUsuarios.apellido}
                  onChange={handleChange}
                  onBlur={handleBlurApellido}
                  className={`form-control ${errorApe ? "error-icon" : ""}`}
                  id="exampleInputApellido"
                  placeholder="Ingrese su apellido"
                  minLength="2"
                  maxLength="20"
                  pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
                  required
                />
                <div className="mjeErrorReg">{errorApellido}</div>
              </div>
              <div className="mb-3">
                <label htmlFor="email1" className="form-label">
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  value={formUsuarios.email}
                  onChange={handleChange}
                  onBlur={handleBlurEmail}
                  className={`form-control ${errorMail ? "error-icon" : ""}`}
                  id="exampleInputEmail1"
                  placeholder="ejemplo@ejemplo.com"
                  minLength="7"
                  maxLength="30"
                  required
                />
                <div className="mjeErrorReg">{errorEmail}</div>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  NOMBRE
                </label>
                <input
                  type="password"
                  name="password"
                  value={formUsuarios.password}
                  onChange={handleChange}
                  onBlur={handleBlurPassword}
                  className={`form-control ${errorPass ? "error-icon" : ""}`}
                  id="exampleInputPassword"
                  placeholder="Contraseña"
                  minLength="4"
                  maxLength="15"
                  required
                />
                <div className="mjeErrorReg">{errorPassword}</div>
              </div>
              <button type="submit" className="botonRegistrar">
                REGISTRAR
              </button>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Registro;
