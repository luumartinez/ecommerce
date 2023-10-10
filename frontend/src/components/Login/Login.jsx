import "./login.css";

const Login = () => {
  return (
    <>
      <form className="formLogin">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            EMAIL
          </label>
          <input
            type="email"
            name="email"
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
            className="form-control"
            id="exampleInputPassword"
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
