import { useContext, useState } from "react";
import TablaCategorias from "../../../components/Administracion/Categorias/TablaCategorias";
import MenuAdmin from "../../../components/Administracion/MenuAdmin";
import Layout from "../../../components/Layout/Layout";
import "./categorias.css";
import { ProveedorCategorias } from "../../../context/CategoriasContext";
// import { ProveedorUsuarios } from "../../../context/UsuariosContext";

const Categorias = () => {
  const { categorias, crearCategoria } = useContext(ProveedorCategorias);

  // CREAR CATEGORIA

  const [nombre, setNombre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    crearCategoria(nombre);
    setNombre("")
  };
  
  return (
    <>
      <Layout title={"Categorias Admin"}>
        <main className="mainCategorias container-fluid">
          <h1 className="text-center">CATEGORIAS</h1>
          <div className="row">
            <div className="col-md-3 mb-3">
              <MenuAdmin />
            </div>
            <div className="w-75 col-md-3">
              <div className="formCrearCat ">
              <form className="mb-3" onSubmit={handleSubmit}>
                <h4>CREAR CATEGORIA</h4>
                <label htmlFor="nombreCat form-label">Categoría a crear</label><p>
                <input
                className="inputCrearCat me-2"
                  type="text"
                  name="nombreCat"
                  value={nombre}
                  placeholder="Nombre de la categoria"
                  onChange={(e) => setNombre(e.target.value)}
                ></input>
                <button type="submit" className="botonCrearCat">CREAR</button></p>
              </form>
              </div>
              <TablaCategorias />
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Categorias;
