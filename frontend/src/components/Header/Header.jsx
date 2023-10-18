import { NavLink, Link } from "react-router-dom";
import imgLogo from "../../img/tienda-online.png";
import "./header.css";
import Login from "../Login/Login";
import { useContext } from "react";
import { ProveedorUsuarios } from "../../context/UsuariosContext";

const Header = () => {
 const { logOut } = useContext(ProveedorUsuarios)

  const usuarioIngresado = JSON.parse(localStorage.getItem("autorizacion"));

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Link className="navbar-brand" to="/">
              <img className="imgLogo" src={imgLogo} /> ECOMMERCE
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {usuarioIngresado ? (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/categoria">
                      Categoria
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/carrito">
                      Carrito (0)
                    </NavLink>
                  </li>
                  <li className="nav-item" onClick={logOut}>
                  <div
                      type="button"
                      className="nav-link"
                    >
                      Log Out
                    </div>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/categoria">
                      Categoria
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/registro">
                      Registro
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <div
                      type="button"
                      className="nav-link"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Log In
                    </div>
                  </li>
                </>
              )}
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content modalLogin">
            <div className="modal-body">
              <Login />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
