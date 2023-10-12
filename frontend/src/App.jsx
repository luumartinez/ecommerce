import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Rutas from "./rutas/Rutas";
import ProveedorUsuarios from "./context/UsuariosContext";

const App = () => {
  return (
    <>
      <ProveedorUsuarios>
        <Rutas />
      </ProveedorUsuarios>
    </>
  );
};

export default App;
