const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db")

const app = express();

dotenv.config()

connectDB();

app.get("/", (req, res) =>{
    res.send({
        message: "HOLA ECOMMERCE"
    })
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{
    console.log(`Servidor puesto en marcha en el puerto ${PORT}`)
})