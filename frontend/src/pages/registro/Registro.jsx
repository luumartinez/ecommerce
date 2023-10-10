import Layout from "../../components/Layout/Layout";
import "./registro.css";

const Registro = () => {
  return (
    <>
      <Layout title={"Registro - ecommerce"}>
        <div className="pagRegistro">
          <h1>PAGINA DE REGISTRO</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                className="form-control"
                id="exampleInputNombre"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="apellido" className="form-label">
                Apellido
              </label>
              <input
                type="text"
                name="apellido"
                className="form-control"
                id="exampleInputApellido"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email1" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="exampleInputEmail1"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                required
              />
            </div>
            <button type="submit" class="btn btn-primary">
              REGISTRAR
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Registro;
