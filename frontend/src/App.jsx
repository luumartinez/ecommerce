import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Rutas from "./rutas/Rutas";
import ProveedorUsuarios from "./context/UsuariosContext";
import ProveedorCategorias from "./context/CategoriasContext";

const App = () => {
  return (
    <>
      <ProveedorCategorias>
        <ProveedorUsuarios>
          <Rutas />
        </ProveedorUsuarios>
      </ProveedorCategorias>
    </>
  );
};

export default App;
