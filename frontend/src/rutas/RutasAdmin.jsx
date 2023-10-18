import { useContext, useEffect, useState } from "react";
import { Outlet, json } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner/Spinner";
import { ProveedorUsuarios } from "../context/UsuariosContext";

const RutasAdmin = () => {
    const [ok, setOk] = useState(false)
    const {autorizacion} = useContext(ProveedorUsuarios)
    useEffect(() =>{
        const verificarAuth = async () =>{
            const response = await axios.get("http://localhost:8080/api/administracion");
            if(response.data.ok){
                setOk(true)
            }else{
                setOk(false)
            }
        }
if(autorizacion?.token) verificarAuth()
    }, [autorizacion?.token])
    return ok ? <Outlet /> : <Spinner />
};

export default RutasAdmin;