import Layout from "../../components/Layout/Layout";
import error404 from "../../img/pantalla-azul.png";
import "./pagError.css";

const PaginaNoEncontrada = () => {

  return (
    <>
      <Layout title={"Pagina no encontrada"}>
        <div className="pagError">
          <div className="contenedorImgError">
            <img style={{ height: "55vh" }} src={error404} />
          </div>
          <div className="contenedorTextoError">
            <h1 className="tituloError">404</h1>
          </div>
          <div className="contenedorTextoError">
            <h1 className="textoError">Página no encontrada</h1>
          </div>
        </div>
        <div className="contenedorBotonError">
         <button className="botonError mb-3" onClick={(e) => {window.location.href="/"}}>
            VOLVER
         </button>
        </div>
      </Layout>
    </>
  );
};

export default PaginaNoEncontrada;
