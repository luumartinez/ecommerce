import Layout from "../../components/Layout/Layout";
import fotoNosotros from "../../img/nosotros.jpg";
import "./nosotros.css";

const Nosotros = () => {
  return (
    <>
      <Layout>
        <div className="pagNosotros">
          <div className="contenedorTitNosotros">
            <h1 className="titNosotros mt-3">Sobre nosotros</h1>
          </div>
          <main className="mainNos">
            <div className="contenedorFoto">
              <img className="fotoNosotros" src={fotoNosotros} />
            </div>
            <div className="contenedorTextoNos">
              <p className="textoNos">
                Fundada con amor y dedicación, nuestra tienda se esfuerza por
                ofrecerte productos excepcionales y una experiencia de compra
                inigualable. 
                En Ecommerce creemos en construir relaciones
                sólidas con nuestros clientes, basadas en la confianza, la
                integridad y el servicio al cliente excepcional. 
                Nuestra misión es hacer que tu experiencia de compra en
                línea sea lo más fácil y placentera posible. Nos esforzamos por
                ofrecerte un servicio personalizado, una navegación sencilla por
                nuestro sitio web y un equipo de atención al cliente
                Estamos aquí para ayudarte a descubrir esos productos que
                mejorarán tu día a día, llenarán tu vida de alegría y harán que
                cada momento sea especial. Gracias por confiar en nosotros para
                satisfacer tus necesidades de compra en línea.
              </p>
            </div>
          </main>
        </div>
      </Layout>
    </>
  );
};

export default Nosotros;
