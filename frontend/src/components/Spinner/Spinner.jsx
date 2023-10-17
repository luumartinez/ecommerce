import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Spinner = () => {
  const [cuenta, setCuenta] = useState(3);
  const redirigir = useNavigate();

  useEffect(() => {
    const intervalo = setInterval(() => {
      setCuenta((valorPrevio) => --valorPrevio);
    }, 1000);
    cuenta === 0 && redirigir("/");
    return () => clearInterval(intervalo);
  }, [cuenta, redirigir]);

  return (
    <>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <h1 className="text-center">
          Inicia sesión para poder ver tu perfil
          <p> Serás redirigido en {cuenta} </p>
        </h1>
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
      </div>
    </>
  );
};

export default Spinner;
