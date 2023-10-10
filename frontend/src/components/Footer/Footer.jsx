import { Link } from 'react-router-dom';
import './footer.css'

const Footer = () => {
    return (
        <>
            <div className='contenedorFooter p-3'>
                <h4 className='text-center'>todos los derechos reservados &copy;</h4>
                <p className='text-center mt-3'>
                <Link className='linksFooter' to="/nosotros">Nosotros</Link> | 
                <Link className='linksFooter' to="/contacto"> Contacto</Link>
                </p>
                </div>
        </>
    );
};

export default Footer;