import Layout from "../../components/Layout/Layout";
import "./registro.css";
import logoReg from "../../img/tarjeta-de-identificacion.png"

const Registro = () => {
  return (
    <>
      <Layout title={"Registro - ecommerce"}>
        <div className="pagRegistro">
          <h1>REGISTRO 
           <p className="d-flex justify-content-center mb-0"> <img style={{width:"10vh"}} src={logoReg} /></p></h1>
          
          <div className="contenedorRegistro mb-3">
            <form>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">
                  NOMBRE
                </label>
                <input
                  type="text"
                  name="nombre"
                  className="form-control"
                  id="exampleInputNombre"
                  placeholder="Ingrese su nombre"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="apellido" className="form-label">
                  APELLIDO
                </label>
                <input
                  type="text"
                  name="apellido"
                  className="form-control"
                  id="exampleInputApellido"
                  placeholder="Ingrese su apellido"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email1" className="form-label">
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="exampleInputEmail1"
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
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Contraseña"
                  required
                />
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
