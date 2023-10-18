import { useContext } from "react";
import Layout from "../../components/Layout/Layout";
import { ProveedorUsuarios } from "../../context/UsuariosContext";


const Inicio = () => {
const {autorizacion} = useContext(ProveedorUsuarios)
  return (
    <>
      <Layout title={"Ecommerce online"}>
        <h1>Home</h1>
        <pre>{JSON.stringify(autorizacion, null, 4)}</pre>
      </Layout>
    </>
  );
};

export default Inicio;
