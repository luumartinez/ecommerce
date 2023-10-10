import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "70vh" }}>{children}</main>
      <Footer />
    </>
  );
};

Layout.defaultProps ={
    title: 'Ecommerce app',
    description: 'ejemplo de proyecto MERN stack',
    keywords: 'mern, react, vite, mongoDB, JS, javaScript',
    author: 'Luisina Martinez'
}

export default Layout;
