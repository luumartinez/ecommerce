import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Rutas from "./rutas/Rutas";
import ProveedorUsuarios from "./context/UsuariosContext";
import ProveedorCategorias from "./context/CategoriasContext";
import ProveedorProductos from "./context/ProductosContext";

const App = () => {
  return (
    <>
    <ProveedorProductos>
      <ProveedorCategorias>
        <ProveedorUsuarios>
          <Rutas />
        </ProveedorUsuarios>
      </ProveedorCategorias>
    </ProveedorProductos>
    </>
  );
};

export default App;
